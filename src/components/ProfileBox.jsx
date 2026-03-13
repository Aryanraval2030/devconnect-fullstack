function ProfileBox({ username, role, skills }) {
  return (
    <div className="min-w-[250px] bg-[#1e293b] p-6 rounded-xl text-center hover:scale-105 transition">
      <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-4 border-2"></div>

      <h2 className="text-lg font-semibold">{username}</h2>

      <p className="text-gray-400 text-sm">{role}</p>

      <p className="text-blue-400 text-sm mt-2">{skills}</p>

      <button className="mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
        View Profile
      </button>
    </div>
  );
}

export default ProfileBox;
