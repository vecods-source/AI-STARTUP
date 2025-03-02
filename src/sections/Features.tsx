"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import product from "@/assets/product-image.png";
import Image from "next/image";
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

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container flex flex-col items-center">
        <div className="py-8">
          <h2 className="font-medium mb-5 text-white text-center text-5xl md:text-6xl leading-[48px] tracking-tighter">
            Elevate your SEO efforts.
          </h2>
          <p className="tracking-tight text-lg md:text-xl max-w-xl text-white/70 text-center font-thin">
            From small startups to large enterprises, our AI-driven tool has
            revolutionized the way businesses approach SEO.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start pt-5 w-full lg:flex-row lg:gap-5">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="flex gap-3 items-center justify-start mb-4 border border-white/15 rounded-lg p-2 w-full"
            >
              <div className="border border-white/15 rounded-lg p-2">
                <DotLottiePlayer
                  src={tab.icon}
                  className="w-5 h-5 "
                  autoplay
                  loop
                />
              </div>
              <div className="text-white text-md font-medium">{tab.title}</div>
              {tab.isNew && (
                <span className="text-black text-xs rounded-lg bg-purple-600 px-2.5 py-0.5">
                  new
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl w-full">
          <div
            className="aspect-video border border-white/20 bg-cover rounded-lg"
            style={{ backgroundImage: `url(${product.src})` }}
          ></div>
        </div>
        {/* <Image src={product} alt={"Product Image"} /> */}
      </div>
    </section>
  );
};
