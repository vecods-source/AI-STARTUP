import Logoicon from "@/assets/logo.svg";
import Menuicon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
export const Header = () => {
  return (
    <header className="py-5 border-b md:border-none md:rounded-lg border-white/15 sticky inset-0 z-10 backdrop-blur-xl md:backdrop-filter-none">
      <div className="container flex md:border border-white/15 md:p-2.5 rounded-2xl justify-between md:max-w-2xl md:mx-auto md:backdrop-blur-xl">
        <div>
          <Logoicon className="w-8 h-8 text-white border border-white/15 rounded-lg " />
        </div>
        <div className="hidden md:flex items-center">
          <nav className="flex gap-4 ">
            <a href="#" className="text-white/15 hover:text-white transition">
              Features
            </a>
            <a href="#" className="text-white/15 hover:text-white transition">
              Pricing
            </a>
            <a href="#" className="text-white/15 hover:text-white transition">
              Developers
            </a>
            <a href="#" className="text-white/15 hover:text-white transition">
              Changelog
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button>Join waitlist</Button>
          <Menuicon className="md:hidden" />
        </div>
      </div>
    </header>
  );
};
