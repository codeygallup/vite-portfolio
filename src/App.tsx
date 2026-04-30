import { Routes, Route } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
