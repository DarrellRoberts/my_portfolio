import "./style/App.css"
import Hero from "./components/HeroFolder/Hero";
import AnimateSkills from "./components/SkillsFolder/AnimateSkills";
import Projects from "./components/ProjectsFolder/Projects";
import Header from "./components/Header";
import Contact from "./components/ContactFolder/Contact"
import AboutTest2 from "./components/AboutFolder/AboutTest2"
import {Routes, Route} from "react-router-dom"
import { useState } from "react"
import LanguageToggle from "./LanguageToggle";
import HeaderDE from "./components copy/HeaderDE"
import HeroDE from "./components copy/HeroFolderDE/Hero"
import AboutDE from "./components copy/AboutFolderDE/AboutTest2"
import ProjectDE from "./components copy/ProjectsFolderDE/Projects"
import AnimateSkillsDE from "./components copy/SkillsFolderDE/AnimateSkills"
import ContactDE from "./components copy/ContactFolderDE/Contact"


const App: React.FC = () => {
  const [showGerman, setShowGerman] = useState<boolean>(false)
  return (
    <>
  <LanguageToggle showGerman={showGerman} setShowGerman={setShowGerman} />
<Routes>
    <Route path="/" element={showGerman ? (
    <>
    <HeaderDE />
    <HeroDE />
    <AboutDE />
    <ProjectDE />
    <AnimateSkillsDE />
    <ContactDE />
    </>
    ) 
    : (
      <>
    <Header />
    <Hero />
    <AboutTest2 />
    <Projects />
    <AnimateSkills />
    <Contact />
    </>
  )}/>
</Routes>
    </>
  );
};

export default App;
