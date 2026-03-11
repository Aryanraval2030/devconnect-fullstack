function Box({icon, title, description }) {
  return (
    <div className="bg-[#1e293b] p-6 rounded-xl text-white w-[350px] flex flex-col items-center text-center">
        <p>{icon}</p>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default Box;
