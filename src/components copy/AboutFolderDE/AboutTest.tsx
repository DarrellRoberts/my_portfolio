import "../../style/About.css"
import { useState } from "react"
import Profilbildbw from "../../assets/Profilbildbw.jpg"
import { LoadingOutlined } from "@ant-design/icons"
import { Spin } from "antd"
import Nutshell from "./CirclesDE/Nutshell";
import Education from "./CirclesDE/Education";
import Experience from "./CirclesDE/Experience";
import "../../style/AboutRes.css"

const AboutTest: React.FC = () => {
  const [isNutShellOpen, setIsNutShellOpen] = useState<boolean>(false);
  const [isEducationOpen, setIsEducationOpen] = useState<boolean>(false);
  const [isExpOpen, setIsExpOpen] = useState<boolean>(false);

  const showNutShell = () => {
    setIsNutShellOpen(true);
  };
  const showEducation = () => {
    setIsEducationOpen(true);
  };
  const showExp = () => {
    setIsExpOpen(true);
  };
    return (
        <>
        <div key="a" className="aboutTitle">
        Über mich
        </div>
        <div key="b" className="flex justify-between">
        {Profilbildbw ? (        
        <img 
        src={Profilbildbw} 
        alt="profile_picture" 
        width="400" 
        className="ppic"
        />) :
        <div className="ppic">
          <div className="flex items-center justify-center">
          <Spin indicator={
          <LoadingOutlined style={{ fontSize: 24}} spin />
          }
          />
          </div>
          </div>}
        <div 
        onClick={showNutShell}
        className="circle1">
        <h2>Kurzgesagt</h2>
        </div>
        {isNutShellOpen ? <Nutshell 
        isNutShellOpen={isNutShellOpen} 
        setIsNutShellOpen={setIsNutShellOpen}/> : null}

        <div 
        onClick={showEducation}        
        className="circle2">
        <h2>Ausbildung</h2>
        </div>
        {isEducationOpen ? <Education 
        isEducationOpen={isEducationOpen} 
        setIsEducationOpen={setIsEducationOpen}/> : null}

        <div 
        onClick={showExp}
        className="circle3">
        <h2>Erfahrung</h2>
        </div>
        {isExpOpen ? <Experience 
        isExpOpen={isExpOpen} 
        setIsExpOpen={setIsExpOpen}/> : null}
        </div>      
    </>
    )
}

export default AboutTest