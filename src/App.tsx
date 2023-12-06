import "./style/App.css";
import "./style/AppRes.css";
import Back from "./assets/background.mp4";
import { DownOutlined } from "@ant-design/icons";
import AnimateSkills from "./components/SkillsFolder/AnimateSkills";
import Projects from "./components/Projects";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
    <Header />
      <div className="heroBack">
        {Back ? (
        <video className="vidBack" loop={true} autoPlay={true} muted>
          <source src={Back} type="video/mp4" />
        </video>
        ) : <div className="vidBack">
          </div>}
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
