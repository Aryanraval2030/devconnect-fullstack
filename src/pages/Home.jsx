import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Hero from "./Hero";
import Sectionfirst from "./Sectionfirst";

function Home() {
  return (
    <div className="h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/" element={<Sectionfirst />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
