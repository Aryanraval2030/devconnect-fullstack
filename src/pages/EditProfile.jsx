import { useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
function EditProfile() {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    const user = auth.currentUser;

    if (!user) return;

    await updateDoc(doc(db, "users", user.uid), {
      name: name,
      skills: skills.split(","),
    });

    alert("Profile saved!");
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0f172a] text-white">
      <div className="bg-[#1e293b] p-6 rounded-xl w-[350px] flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center">Edit Profile</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded bg-[#0f172a] border border-gray-600"
        />

        <input
          type="text"
          placeholder="Enter skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="p-2 rounded bg-[#0f172a] border border-gray-600"
        />

        <button
          onClick={handleSave}
          className="bg-blue-600 p-2 rounded hover:bg-blue-700"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
