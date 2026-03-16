function Hero() {
  return (
    <div id="home" className="relative min-h-[90vh] pt-[30vh] flex items-center justify-center overflow-hidden bg-[#020617]">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
            🚀 The Future of Networking
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
          Connect with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 animate-gradient-x">
            Developers Worldwide
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
          The ultimate space to share your projects, follow top-tier developers,
          and scale your career through global collaboration.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-10 py-4 bg-blue-600 rounded-full font-bold text-lg text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95 overflow-hidden">
            <span className="relative z-10">Get Started Free</span>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>

          <button className="px-10 py-4 rounded-full font-bold text-lg text-white border-2 border-slate-700 hover:border-blue-500 hover:bg-slate-800/50 transition-all duration-300 active:scale-95">
            Explore Projects
          </button>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-800/50 flex flex-wrap justify-center gap-10 md:gap-20 opacity-60">
          <div className="text-center">
            <h3 className="text-2xl font-bold">50K+</h3>
            <p className="text-sm text-gray-500">Developers</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">120+</h3>
            <p className="text-sm text-gray-500">Countries</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">10K+</h3>
            <p className="text-sm text-gray-500">Projects</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] mask-image-linear-gradient"></div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `,
        }}
      />
    </div>
  );
}

export default Hero;
