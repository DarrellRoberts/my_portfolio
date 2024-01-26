import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./Database";
import Tools from "./Tools";
import "../../style/Skills.css";
import "../../style/SkillsRes.css";

const AnimateSkills = () => {
  return (
    <div className="skillsCon">
    <div className="queueGrid">
        <div key="a" className="skillsTitle">
          Fähigkeiten
        </div>
        <div key="b" className="frontSkills">
          <Frontend />
        </div>
        <div key="c" className="backSkills">
          <Backend />
        </div>
        <div key="d" className="dataSkills">
          <Database/>
        </div>
        <div key="e" className="toolSkills">
          <Tools /> 
        </div>
        </div>
        </div>      
  );
};

export default AnimateSkills;
