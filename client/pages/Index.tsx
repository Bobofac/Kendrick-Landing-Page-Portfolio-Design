export default function Index() {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Left Section - Navy Blue */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute left-0 top-0 w-full md:w-[55%] h-full bg-[#1A1A59] z-10 animate-slide-in-left">
          <svg
            className="absolute inset-0 w-full h-full object-cover"
            viewBox="0 0 703 832"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M0 0H647C647 0 515.333 248.5 630 392.5C772.935 572 664.5 754 647 832C591.686 1078.54 0 832 0 832V0Z"
              fill="#1A1A59"
            />
          </svg>
        </div>

        {/* Right Section - Burgundy Red */}
        <div className="absolute right-0 top-0 w-full md:w-[62%] h-full bg-[#8A1919] z-0 animate-slide-in-right">
          <svg
            className="absolute inset-0 w-full h-full object-cover"
            viewBox="0 0 658 832"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M73.9999 0C123 -95 476.907 -123.219 659 0C841.093 123.219 841.093 708.781 659 832C476.907 955.219 68.2515 943.684 66.4999 868C64.7483 792.316 117 716.5 117 650C133.5 401.5 18.5 379.5 3.99992 271.5C-10.5001 163.5 25 95 73.9999 0Z"
              fill="#8A1919"
            />
          </svg>
        </div>
      </div>

      {/* KENDRICK LAMAR Text - Behind Image */}
      <div className="absolute inset-0 flex items-center justify-center z-15">
        <h1 className="font-inria-serif font-bold text-6xl md:text-8xl lg:text-9xl xl:text-[140px] leading-none tracking-wide animate-fade-in-up">
          <span
            className="bg-gradient-to-r from-[rgba(255,0,0,1)] to-[rgba(0,0,255,1)] bg-clip-text text-transparent"
            style={{
              textShadow:
                "0px 4px 8px rgba(0, 0, 0, 0.8), 0px 0px 20px rgba(255, 255, 255, 0.3)",
              WebkitTextStroke: "2px rgba(255,255,255,0.3)",
            }}
          >
            KENDRICK LAMAR
          </span>
        </h1>
      </div>

      {/* Centered Image - Above Text */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="animate-scale-in">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/960fdbe5cbd2ea8636d43f75f1ba0a2bef04942e?width=1636"
            alt="Kendrick Lamar"
            className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] h-auto object-cover opacity-90"
          />
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-30 h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 md:p-8 lg:p-12 flex justify-between items-start animate-fade-in-down">
          <div className="text-white font-island-moments text-4xl md:text-6xl lg:text-8xl xl:text-[96px] leading-none tracking-wide">
            K-dot
          </div>

          {/* Menu Button - Mobile */}
          <button className="md:hidden text-white flex flex-col items-center gap-2">
            <span className="text-lg font-semibold">Menu</span>
            <div className="w-8 h-0.5 bg-white"></div>
          </button>

          {/* Menu Button - Desktop */}
          <div className="hidden md:block absolute right-8 lg:right-16 xl:right-24 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col items-center gap-4 transform -rotate-90">
              <span className="text-white text-xl lg:text-2xl xl:text-[25px] font-semibold whitespace-nowrap">
                Menu
              </span>
              <div className="w-12 lg:w-16 h-1 bg-white"></div>
            </div>
          </div>
        </header>

        {/* Bottom Left Content */}
        <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-6 md:left-8 lg:left-12 space-y-6 md:space-y-8 animate-fade-in-up-delayed">
          {/* Divider Line */}
          <div className="w-48 md:w-64 lg:w-[270px] h-px bg-white/50"></div>

          {/* Tagline */}
          <p className="text-white font-inria-serif italic text-lg md:text-2xl lg:text-3xl xl:text-[35px] leading-relaxed tracking-wide max-w-sm">
            Poetic justice in every bar.
          </p>

          {/* CTA Buttons */}
          <div className="space-y-3 md:space-y-4 lg:space-y-[11px]">
            <button className="block text-white font-inria-serif text-lg md:text-2xl lg:text-[30px] font-light tracking-wide hover:opacity-80 transition-opacity text-left animate-fade-in-stagger-1">
              Listen now
            </button>
            <button className="block text-white font-inria-serif text-lg md:text-2xl lg:text-[30px] font-light tracking-wide hover:opacity-80 transition-opacity text-left animate-fade-in-stagger-2">
              Tour dates
            </button>
            <button className="block text-white font-inria-serif text-lg md:text-2xl lg:text-[30px] font-light tracking-wide hover:opacity-80 transition-opacity text-left animate-fade-in-stagger-3">
              Merch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
