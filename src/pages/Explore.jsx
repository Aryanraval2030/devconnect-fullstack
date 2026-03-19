import ProfileBox from "../components/ProfileBox";
import withHoverEffect from "../components/withHoverEffect";
const Enhance = withHoverEffect(ProfileBox);

function Explore() {
  const developers = [
    {
      username: "Aryan",
      role: "Full Stack Dev",
      skills: "React Tailwind Firebase",
    },
    { username: "Rahul", role: "Frontend Dev", skills: "html css" },
    {
      username: "Sara",
      role: "UI Developer",
      skills: "Figma Tailwind next.js",
    },
    { username: "John", role: "Backend Dev", skills: "Node Firebase" },
    { username: "Alex", role: "React Dev", skills: "React Redux chatgpt" },
  ];
  return (
    <div id="explore" className="mt-10 px-[5vw] overflow-hidden">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        Explore Developers
      </h1>

      <p className="text-center mb-10 ">
        Discover talented developers worldwide
      </p>

      {/* slider */}
      <div className="group overflow-hidden pt-3 pb-3">
        <div className="flex gap-8 animate-slide py-[5vh] h-auto w-[102vw] group-hover:[animation-play-state:paused]">
          {developers.map((dev, inx) => (
            <Enhance key={inx} {...dev} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
