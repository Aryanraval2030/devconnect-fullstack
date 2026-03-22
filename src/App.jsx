import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import Signup from "./pages/Signup";
import ThemeContext from "./components/UserContext";
import { useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { theme } = useContext(ThemeContext); // 🔥 important
  return (
    <div
      className={
        theme === "dark"
          ? "bg-[#0f172a] text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signup />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
