"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import product from "@/assets/product-image.png";
import { ComponentPropsWithRef, useEffect, useRef, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  ValueAnimationTransition,
} from "framer-motion";
const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];
const Feature = (
  props: (typeof tabs)[number] &
    ComponentPropsWithRef<"div"> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLatteRef = useRef<DotLottieCommonPlayer>(null);
  function handleInteract() {
    if (!dotLatteRef.current) return;
    dotLatteRef.current.seek(0);
    dotLatteRef.current.play();
  }
  const YPercentage = useMotionValue(0);
  const XPercentage = useMotionValue(0);

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;
    XPercentage.set(0);
    YPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = (height + width) * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(XPercentage, [0, 100, 100, 0, 0], options);
    animate(YPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${XPercentage}% ${YPercentage}%,black,transparent)`;
  return (
    <div
      ref={tabRef}
      onMouseEnter={handleInteract}
      className="flex gap-3 items-center justify-start mb-4 border border-white/15 rounded-lg p-2 w-full cursor-pointer relative"
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          style={{ maskImage }}
          className="absolute inset-0 border border-[#A369FF] rounded-lg -m-px [mask-image:]"
        ></motion.div>
      )}

      <div className="border border-white</div>/15 rounded-lg p-2">
        <DotLottiePlayer
          ref={dotLatteRef}
          src={props.icon}
          className="w-5 h-5 "
          autoplay
        />
      </div>
      <div className="text-white text-md font-medium">{props.title}</div>
      {props.isNew && (
        <span className="text-black text-xs rounded-lg bg-purple-600 px-2.5 py-0.5">
          new
        </span>
      )}
    </div>
  );
};
export const Features = () => {
  const backgroundPositionX = useMotionValue(0);
  const backgroundPositionY = useMotionValue(0);
  const backgroundSizeX = useMotionValue(100);

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;

  function handleSelect(index: number) {
    setCurrentIndex(index);
    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions
    );
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section className="py-20 md:py-24">
      <div className="container flex flex-col items-center">
        <div className="py-8">
          <h2 className="title">Elevate your SEO efforts.</h2>
          <p className="description">
            From small startups to large enterprises, our AI-driven tool has
            revolutionized the way businesses approach SEO.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start pt-5 w-full lg:flex-row lg:gap-5">
          {tabs.map((tab, index) => (
            <Feature
              {...tab}
              key={index}
              onClick={() => handleSelect(index)}
              selected={currentIndex == index}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl w-full">
          <motion.div
            className="aspect-video border border-white/20 bg-cover rounded-lg"
            style={{
              backgroundImage: `url(${product.src})`,
              backgroundSize,
              backgroundPosition,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
