import {  Modal } from "antd"
import "../../../style/Modals.css"

interface ModalProps {
  isExpOpen: boolean;
  setIsExpOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Experience: React.FC<ModalProps> = ({isExpOpen, setIsExpOpen}) => {

    const handleOk = () => {
        setIsExpOpen(false);
      };
    
    const handleCancel = () => {
        setIsExpOpen(false);
      };

    return (
        <Modal title="Experience" 
        open={isExpOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>
        <p>With my four years' experience in digital marketing, I learnt to perfect project management and meet either the company's or clients' deadlines. I ran multi-million euro (annual) budgets for clients such as Easyjet, to overseeing far smaller expenditures from various Berlin startups. </p>
        <p>The Fullstack Developer Bootcamp I completed in 2023 allowed me to accelerate my coding experience, with either solo or group projects. I routinely worked in a team, mostly for weekly projects but also for one-day Hackathons 
          <a href="https://github.com/DarrellRoberts/flag-app" className="underline" target="_blank"> (one of which I won with my team). </a>
          </p>
        <p> Currently, I am working on not only my own projects but also contributing towards open source repositories.</p>
        <p> If you are interested in some of my work, you can find my portfolio below</p>
      </Modal>
    )
}

export default Experience