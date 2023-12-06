import { OverPack } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Database from "./Database";
import Tools from "./Tools";
import "../../style/Skills.css";
import "../../style/SkillsRes.css";

const AnimateSkills = () => {
  return (
    <OverPack 
    className="overpackCon">      
    <TweenOne
        key="0"
        animation={{ opacity: 1 }}
        className="code-box-shape"
          style={{ opacity: 0 }}
      />
      <QueueAnim
        key="queue"
        className="queueGrid"
        leaveReverse
      >
        <div key="a" className="skillsTitle">
          Skills
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
      </QueueAnim>
    </OverPack>
  );
};

export default AnimateSkills;
