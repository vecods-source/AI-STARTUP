"use client";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Xlogo from "@/assets/social-x.svg";
import InstaLogo from "@/assets/social-instagram.svg";
import YoutubeLogo from "@/assets/social-youtube.svg";
export const Footer = () => {
  return (
    <footer className="border-t-[1px] border-white/15">
      <div className="container py-5">
        <div className="flex flex-col flex-start gap-6 justify-between text-white/40 lg:flex-row lg:gap-12">
          <div className="flex items-center gap-4">
            <Logo className="w-6 h-6 text-white" />
            <span>AI Startup Landing Page</span>
          </div>
          <nav className="flex flex-col gap-2 justify-center font-light lg:flex-row lg:gap-5">
            <a href="#">Features</a>
            <a href="#">Developers</a>
            <a href="#">Company</a>
            <a href="#">Blog</a>
            <a href="#">Changlog</a>
          </nav>
          <div className="flex gap-5">
            <Xlogo />
            <InstaLogo />
            <YoutubeLogo />
          </div>
        </div>
      </div>
    </footer>
  );
};
