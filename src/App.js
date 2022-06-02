import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Email from "./Pages/Email";
import "./Styles/normalize.css";
import "./Styles/main.css";
import "react-icons";
import WorkoutGenerator from "./Pages/WorkoutGenerator";
import GHChuck from "./Pages/GHChuck";
import TheHills from "./Pages/TheHills";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email" element={<Email />} />
        <Route path="/workout-generator" element={<WorkoutGenerator />} />
        <Route path="/good-luck-chuck" element={<GHChuck />} />
        <Route path="/the-hills" element={<TheHills />} />
      </Routes>
    </>
  );
}

export default App;
