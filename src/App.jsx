import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
