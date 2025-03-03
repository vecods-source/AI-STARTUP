import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
export const Hero = () => {
  return (
    <section
      className="flex h-[492px] md:h-[800px] items-center relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${starBg.src})` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      <div className="w-[344px] h-[344px] md:w-[580px] md:h-[580px] border border-white opacity-10 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full">
        <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 -left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-4 h-4 rounded-full border border-white absolute top-1/2 left-[100%] -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="w-2 h-2 rounded-full bg-white absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="w-[444px] h-[444px] md:h-[780px] md:w-[780px] border border-dashed border-white opacity-15 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"></div>
      <div className="w-[544px] h-[544px] md:h-[980px] md:w-[980px] border border-white opacity-15 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full">
        <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 -left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 left-[100%] -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="w-64 h-64 md:w-96 md:h-96 rounded-full absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] border border-white/45 bg-purple-500 shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]"></div>
      <div className="container flex items-center flex-col gap-5 relative">
        <h1 className="text-center text-8xl md:text-[168px] md:leading-none text-transparent bg-clip-text font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]">
          AI SEO
        </h1>
        <p className="text-xl md:text-xl max-w-xl text-white text-center font-thin">
          {`Elevate your site's visibility effortlessly with AI,
               where smart technology meets user-friendly SEO tools`}
        </p>
        <Button>Join waitlist</Button>
      </div>
    </section>
  );
};
