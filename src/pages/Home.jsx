import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Explore from "./Explore";
import Hero from "./Hero";

function Home() {
  return (
    <div className="h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
