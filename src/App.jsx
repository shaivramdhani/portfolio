import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { HeroSection } from "./components/HeroSection";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/AboutSection";
import { ProjectsSection } from "./pages/ProjectsSection";
import {ContactSection} from "./pages/ContactSection" ;
import { Navbar } from "./components/NavBar";
import {SkillsSection} from "./pages/SkillsSection";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
