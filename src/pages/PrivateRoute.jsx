import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function PrivateRoute({ children }) {
  const location = useLocation(); // 👈 current path

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [profileComplete, setProfileComplete] = useState(null);

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
    try {
      setUser(currentUser);

      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          if (data.name && data.skills?.length > 0) {
            setProfileComplete(true);
          } else {
            setProfileComplete(false);
          }
        } else {
          setProfileComplete(false);
        }
      }
    } catch (error) {
      console.log("Error:", error);
      setProfileComplete(false); // fallback
    } finally {
      setLoading(false); // ✅ ALWAYS run hoga
    }
  });

  return () => unsubscribe();
}, []);
  // ⏳ loading state
  if (loading) return <p>Checking authentication...</p>;

  // ❌ not logged in
  if (!user) return <Navigate to="/login" replace />;

  // 🔁 profile incomplete → edit page (loop avoid)
  if (!profileComplete && location.pathname !== "/edit-profile") {
    return <Navigate to="/edit-profile" replace />;
  }

  return children;
}

export default PrivateRoute;