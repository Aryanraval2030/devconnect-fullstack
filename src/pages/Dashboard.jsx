import {
  FaUser,
  FaUserEdit,
  FaPlusSquare,
  FaFileAlt,
  FaBookmark,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user || !userData) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="pt-[24vh] px-4 md:px-6">
      <div className="flex flex-col md:flex-row gap-5">

        {/* 🔹 Sidebar */}
        <aside className="w-full md:w-[20%] border rounded-xl p-4 border-purple-700">
          <h1 className="text-xl mb-3">Dashboard</h1>

          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-center gap-2"><FaUser /> Profile</li>
            <li className="flex items-center gap-2"><FaUserEdit /> Edit Profile</li>
            <li className="flex items-center gap-2"><FaPlusSquare /> Create Post</li>
            <li className="flex items-center gap-2"><FaFileAlt /> My Posts</li>
            <li className="flex items-center gap-2"><FaBookmark /> Saved Posts</li>
            <li className="flex items-center gap-2"><FaBell /> Notifications</li>
            <li className="flex items-center gap-2"><FaCog /> Settings</li>
            <li className="flex items-center gap-2"><FaSignOutAlt /> Logout</li>
          </ul>
        </aside>

        {/* 🔹 Main Content */}
        <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-[40%_60%] gap-6">

          {/* LEFT */}
          <div className="flex flex-col items-center gap-5">
            <div className="bg-purple-500 rounded-full h-[180px] w-[180px] md:h-[250px] md:w-[250px] flex justify-center items-center text-3xl md:text-4xl">
              {userData?.name?.charAt(0)}
            </div>

            <button className="bg-purple-950 px-4 py-2 rounded text-white text-sm md:text-base">
              Followers 10k
            </button>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-xl md:text-2xl font-bold">
              {userData?.name}
            </p>

            {/* Description */}
            <p className="text-lg text-[#22c55e] mt-3">Description</p>
            <span className="block h-[2px] w-[150px] bg-purple-600 my-2"></span>
            <p className="text-sm md:text-base">
              {userData?.description || "No description added"}
            </p>

            {/* Skills */}
            <p className="mt-4 text-lg text-[#22c55e]">Your Skills</p>
            <span className="block h-[2px] w-[150px] bg-purple-600 my-2"></span>

            <div className="flex gap-2 flex-wrap">
              {userData?.skills?.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-700 px-3 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Projects */}
            <p className="mt-4 text-lg text-[#22c55e]">Projects</p>
            <span className="block h-[2px] w-[150px] bg-purple-600 my-2"></span>

            {userData?.projects ? (
              <a
                href={userData.projects}
                target="_blank"
                className="text-blue-400 underline text-sm md:text-base"
              >
                View Project
              </a>
            ) : (
              <p className="text-sm">No project added</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;