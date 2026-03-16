import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      navigate("/dashboard"); // signup ke baad dashboard redirect
    } catch (err) {
      console.log(err.message);
      alert("Signup failed!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#0f172a]">
      <form
        onSubmit={handleSignup}
        className="bg-[#1e293b] p-8 rounded-2xl w-[350px] text-white flex flex-col gap-4"
        autoComplete="off"
      >
        <h1 className="text-3xl font-bold text-center mb-2">DevConnect</h1>
        <p className="text-center text-gray-400 mb-4">
          Create your account to connect with developers
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-lg bg-[#0f172a] border border-gray-600 outline-none"
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-lg bg-[#0f172a] border border-gray-600 outline-none"
          autoComplete="new-password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="p-3 rounded-lg bg-[#0f172a] border border-gray-600 outline-none"
          autoComplete="new-password"
        />

        <button className="bg-blue-600 p-3 rounded-lg font-semibold hover:bg-blue-700">
          Sign Up
        </button>

        <p className="text-center text-gray-400 mt-2">
          Already have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;