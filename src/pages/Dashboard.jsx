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
    <div className="p-6">
      <h1 className="text-2xl font-bold">this is a Dashboard</h1>
    </div>
  );
}

export default Dashboard;