import Plasma from "../Plasma";

function Hero() {
  return (
    <>
      <div className="relative h-[100vh]">
        <Plasma
          color="#3b82f6"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
      <div className="absolute top-[100px] pointer-events-none left-[0] w-[100vw] mt-[10px] text-center">
        <div className="">
          <h1 className="leading-[10rem] text-4xl text-[#3b82f6]">
            Connect with Developers Worldwide
          </h1>
          <p className="text-4xl text-[#3b82f6]">
            Share your projects, follow developers, and grow together
          </p>
        </div>
        <div className="mt-[8vh] flex gap-5 justify-center">
          <button className="border-2 border-[#3b82f6] text-2xl py-2 rounded-full bg-[#0f172a] text-[white] px-10">sign-up</button>
          <button className="border-2 border-[#3b82f6] text-2xl py-2 rounded-full bg-[#0f172a] text-[white] px-10">explore</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
