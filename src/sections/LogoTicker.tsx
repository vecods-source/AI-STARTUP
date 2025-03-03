"use client";
import logo from "@/assets/logo-acme.png";
import logo2 from "@/assets/logo-apex.png";
import logo3 from "@/assets/logo-celestial.png";
import logo4 from "@/assets/logo-echo.png";
import logo5 from "@/assets/logo-pulse.png";
import logo6 from "@/assets/logo-quantum.png";
import Image from "next/image";
import { motion } from "framer-motion";
export const LogoTicker = () => {
  return (
    <section>
      <div className="container mt-20 md:my-24 gap-5">
        <div className="flex gap-5 items-center">
          <div className="flex flex-1 md:flex-none">
            <h2 className="text-white">Trusted by top innovative teams</h2>
          </div>
          <motion.div className="flex overflow-hidden flex-1 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              animate={{ x: "-50%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex flex-none  gap-14 pr-14 "
            >
              {[
                logo,
                logo2,
                logo3,
                logo4,
                logo5,
                logo6,
                logo,
                logo2,
                logo3,
                logo4,
                logo5,
                logo6,
              ].map((logoSrc, index) => (
                <Image
                  className="h-6 w-auto"
                  key={index}
                  src={logoSrc}
                  alt={`Logo ${index + 1}`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
