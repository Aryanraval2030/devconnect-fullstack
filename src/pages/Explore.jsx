import ProfileBox from "../components/ProfileBox";

function Explore() {
  return (
    <div id="explore" className="mt-10 text-white px-[5vw] overflow-hidden">
      <h1 className="text-3xl font-bold text-center">Explore Developers</h1>

      <p className="text-gray-400 text-center mb-10">
        Discover talented developers worldwide
      </p>

      {/* slider */}
      <div className="group overflow-hidden pt-3 pb-3">
        <div className="flex gap-8 animate-slide h-[50vh] group-hover:[animation-play-state:paused]">
          <ProfileBox
            username="Aryan"
            role="Full Stack Dev"
            skills="React Tailwind Firebase"
          />
          <ProfileBox
            username="Rahul"
            role="Frontend Dev"
            skills="HTML CSS JS"
          />
          <ProfileBox
            username="Sara"
            role="UI Developer"
            skills="Figma Tailwind"
          />
          <ProfileBox
            username="John"
            role="Backend Dev"
            skills="Node Firebase"
          />
          <ProfileBox username="Alex" role="React Dev" skills="React Redux" />

          {/* repeat cards for infinite slider */}
          <ProfileBox
            username="Aryan"
            role="Full Stack Dev"
            skills="React Tailwind Firebase"
          />
          <ProfileBox
            username="Rahul"
            role="Frontend Dev"
            skills="HTML CSS JS"
          />
          <ProfileBox
            username="Sara"
            role="UI Developer"
            skills="Figma Tailwind"
          />
        </div>
      </div>
    </div>
  );
}

export default Explore;
