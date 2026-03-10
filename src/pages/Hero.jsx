import Plasma from "../Plasma";

function Hero() {
  return (
    <>
     <div className="relative h-[85vh]">
        <Plasma
          color="#3b82f6"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
    </>
  );
}

export default Hero;
