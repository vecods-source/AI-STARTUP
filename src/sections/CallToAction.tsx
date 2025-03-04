"use client";
import Image from "next/image";
import Button from "@/components/Button";
import Stars from "@/assets/stars.png";
import Grid from "@/assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";
const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function ChangeMouse(event: MouseEvent) {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    console.log("Left: " + left);
    console.log("Current window: " + event.x);
    mouseX.set(event.x - left);
    console.log("Final value: " + mouseX.get());
    mouseY.set(event.y - top);
  }
  useEffect(() => {
    window.addEventListener("mousemove", ChangeMouse);
    return () => window.removeEventListener("mousemove", ChangeMouse);
  });
  return [mouseX, mouseY];
};
export const CallToAction = () => {
  const borderRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const transformY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const [mouseX, mouseY] = useRelativeMousePosition(borderRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;
  return (
    <section className="my-20 md:my-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderRef}
          className="border border-white/20 rounded-lg py-24 relative group"
          style={{
            backgroundImage: `url(${Stars.src})`,
            backgroundPositionY: transformY,
          }}
          animate={{ backgroundPositionX: Stars.width }}
          transition={{ duration: 60, ease: "easeIn", repeat: Infinity }}
        >
          <motion.div
            className="py-24 absolute inset-0 bg-[rgb(74,32,138)] [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] opacity-100 group-hover:opacity-0 transition-all duration-1000"
            style={{
              backgroundImage: `url(${Grid.src})`,
              backgroundBlendMode: "overlay",
            }}
          ></motion.div>
          <motion.div
            className="py-24 absolute inset-0 bg-[rgb(74,32,138)] opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              backgroundImage: `url(${Grid.src})`,
              backgroundBlendMode: "overlay",
              maskImage,
            }}
          ></motion.div>
          <div className="relative">
            <h2 className="title max-w-[384px] mx-auto">
              AI-driven SEO for everyone.
            </h2>
            <p className="description mx-auto" style={{ maxWidth: "18rem" }}>
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center items-center mt-5">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
