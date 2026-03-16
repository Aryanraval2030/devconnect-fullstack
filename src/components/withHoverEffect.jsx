function withHoverEffect(Compo) {
  return (props) => {
    const skillsCount = props.skills.split(" ").length; // assuming space separated
    if (skillsCount >= 3) {
      return (
        <div className="hover:scale-105 transition-transform drop-shadow-[0_4px_6px_rgba(255,0,0,0.5)]">
          <Compo {...props} />
        </div>
      );
    }
    return (
      <div className="hover:scale-105 transition-transform">
        <Compo {...props} />
      </div>
    );
  };
}

export default withHoverEffect;
