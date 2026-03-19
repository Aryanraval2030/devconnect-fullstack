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
import { auth } from "../firebase/firebaseConfig";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  if (!user) return <p>Loading user data...</p>;

  return (
    <div className="flex h-[96vh] w-[100%] pt-[20vh] pr-6 pl-6">
      <aside className="border-r rounded-xl leading-[50px] text-xl pt-[5px] border-purple-700  w-[20%]">
        <h1>Dashboard</h1>

        <ul>
          <li>
            <span className="inline-block pr-2">
              <FaUser />
            </span>
            Profile
          </li>
          <li>
            <span className="inline-block pr-2">
              <FaUserEdit />
            </span>
            Edit Profile
          </li>
          <li>
            <span className="inline-block pr-2">
              <FaPlusSquare />
            </span>
            Create Post
          </li>
          <li>
            <span className="inline-block pr-2">
              <FaFileAlt />
            </span>
            My Posts
          </li>
          <li>
            <span className="inline-block pr-2">
              <FaBookmark />
            </span>
            Saved Posts
          </li>
          <li>
            <span className="inline-block pr-2">
              <FaBell />
            </span>
            Notifications
          </li>
          <li>
            <span className="inline-block pr-2">
              <FaCog />
            </span>
            Settings
          </li>
          <li>
            <span className="inline-block pr-2">
              <FaSignOutAlt />
            </span>
            Logout
          </li>
        </ul>
      </aside>

      <div className="w-[80%] grid grid-cols-1 md:grid-cols-[40%_60%]">
        <div className="grid grid-rows-2">
          <div className="flex justify-center items-center">
            <div className="bg-purple-500 rounded-full h-[250px] w-[250px] flex justify-center items-center text-4xl">
              Profile
            </div>
          </div>
          <div className="flex justify-center gap-3 pt-[10%]">
            <button className="bg-purple-950 rounded-md py-[10px] text-xl px-[15px] h-fit text-white">
              follower 10k
            </button>
          </div>
        </div>
        <div className="border-2 border-purple-900">
          <div className="border-2">
            progress
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
