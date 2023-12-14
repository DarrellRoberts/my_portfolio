import "./style/App.css"
import Hero from "./components/HeroFolder/Hero";
import AnimateSkills from "./components/SkillsFolder/AnimateSkills";
import Projects from "./components/ProjectsFolder/Projects";
import Header from "./components/Header";
import Contact from "./components/ContactFolder/Contact"
import AboutTest2 from "./components/AboutFolder/AboutTest2"

const App: React.FC = () => {
  return (
    <>
    <Header />
    <Hero />
    <AboutTest2 />
    <Projects />
    <AnimateSkills />
    <Contact />
    </>
  );
};

export default App;
