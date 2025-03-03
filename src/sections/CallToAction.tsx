import Image from "next/image";
import Button from "@/components/Button";
import Stars from "@/assets/stars.png";
import Grid from "@/assets/grid-lines.png";
export const CallToAction = () => {
  return (
    <section className="my-20 md:my-24">
      <div className="container">
        <div
          className="border border-white/20 rounded-lg py-24 relative"
          style={{ backgroundImage: `url(${Stars.src})` }}
        >
          <div
            className="py-24 absolute inset-0 bg-[rgb(74,32,138)] [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${Grid.src})`,
              backgroundBlendMode: "overlay",
            }}
          ></div>
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
        </div>
      </div>
    </section>
  );
};
