const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative px-3 py-2 font-medium text-sm rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0_0_12px_#8c45ff]">
      <div className="absolute inset-0">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,transparent,black)]"></div>
        <div className="absolute rounded-lg inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset]"></div>
      </div>
      <span className="text-white text-sm">{props.children}</span>
    </button>
  );
};

export default Button;
