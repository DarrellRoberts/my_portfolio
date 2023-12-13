import "./style/App.css"
import Hero from "./components/HeroFolder/Hero";
import AnimateSkills from "./components/SkillsFolder/AnimateSkills";
import Projects from "./components/ProjectsFolder/Projects";
import Header from "./components/Header";
import Contact from "./components/ContactFolder/Contact"
import About from "./About"

const App: React.FC = () => {
  return (
    <>
    <Header />
    <Hero />
    <AnimateSkills />
    <Projects />
    <About />
    <Contact />
    </>
  );
};

export default App;
