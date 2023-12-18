import "../../style/About.css"
import Profilbildbw from "../../assets/Profilbildbw.jpg"
import SocialLinks from "./SocialLinks"
import { OverPack } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";

const AboutTest: React.FC = () => {

    return (
        <>
<OverPack
    id="skills" 
    className="">      
    <TweenOne
        key="0"
        animation={{ opacity: 1 }}
        className="code-box-shape"
          style={{ opacity: 0 }}
      />
      <QueueAnim
        key="queue"
        // className="flex justify-between"
        leaveReverse
      >
        <div key="a" className="aboutTitle">
        About
        </div>
        <div key="b" className="flex justify-between">
        {Profilbildbw ? (        
        <img 
        src={Profilbildbw} 
        alt="profile_picture" 
        width="400" 
        className="ml-20 rounded-lg"
        />) :
        <div className="ml-20 rounded-lg w-[400px]">
          Loading...
          </div>}
        <div className="circle1">
        <h2>In a nutshell</h2>
        </div>
        <div className="circle2">
        <h2>Education</h2>
        </div>
        <div className="circle3">
        <h2>Experience</h2>
        </div>
        </div>      
      </QueueAnim>
    </OverPack>
    </>
    )
}

export default AboutTest