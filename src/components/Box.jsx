function Box({icon, title, description }) {
  return (
    <div className="bg-[#1e293b] md:w-[320px] p-6 sm:w-[280px]  rounded-xl text-white w-[100%] flex flex-col items-center text-center">
        <p>{icon}</p>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default Box;
