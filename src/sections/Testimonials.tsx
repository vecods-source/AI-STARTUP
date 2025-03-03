import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="title">Beyond Expectations.</h2>
        <div className="flex justify-center">
          <p className="description" style={{ maxWidth: "384px" }}>
            Our revolutionary AI SEO tools have transformed our clients&apos;
            strategies.
          </p>
        </div>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_80%,transparent)]">
          <div className="mt-5 inline-flex gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="max-w-xs md:max-w-md flex-none text-white bg-[linear-gradient(243.09deg,rgba(140,69,255,0.3)_0%,#000_100%)] p-6 md:p-10 border border-white/15 rounded-xl"
              >
                <div className="tracking-tight font-extralight text-lg md:text-2xl">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="relative after:content-[''] after:absolute after:rounded-lg after:bg-[#b55adf] after:inset-0 after:mix-blend-soft-light before:absolute before:z-10 before:border before:border-white/30 before:inset-0 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt={testimonial.name}
                      className="h-11 w-11 grayscale rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-white/30 text-xs">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
