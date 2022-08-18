import "./styles.css";
import Welcome from "./pages/Welcome";
import Worksetup from "./pages/Worksetup";
import Selectscheme from "./pages/Selectscheme";
import Success from "./pages/Success";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/setup" element={<Worksetup />} />
        <Route path="/scheme" element={<Selectscheme />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}
