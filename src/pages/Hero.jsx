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
      <div className="absolute top-[100px] pointer-events-none left-[0] w-[100vw] mt-[10px]">
       
      </div>
    </>
  );
}

export default Hero;
