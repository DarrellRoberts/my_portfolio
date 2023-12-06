import "./style/App.css";
import "./style/AppRes.css";
import Back from "./assets/background.mp4";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AnimateSkills from "./components/SkillsFolder/AnimateSkills";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <>
      <div className="heroBack">
        <video className="vidBack" loop={true} autoPlay={true} muted>
          <source src={Back} type="video/mp4" />
        </video>
        <div className="name">
          <h1>
            Darrell <br /> Roberts
          </h1>
          <h2>Fullstack Developer</h2>
          <DownOutlined
            onClick={() =>
              window.scrollTo({
                top: 1000,
                behavior: "smooth",
              })
            }
            className="V"
          />
        </div>
      </div>
      <AnimateSkills />
      <Projects />
    </>
  );
};

export default App;
