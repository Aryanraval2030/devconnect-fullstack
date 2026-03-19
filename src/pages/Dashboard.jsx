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
    <div className="flex h-[100vh] w-[100%] pt-[25vh]">
      <aside className="border-r rounded-xl leading-[50px] text-xl pl-4 pt-[5px] border-purple-700  w-[20%]">
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
      <div className="pl-[10px] pt-[5px] w-[80%]">user dashboard data</div>
    </div>
  );
}

export default Dashboard;
