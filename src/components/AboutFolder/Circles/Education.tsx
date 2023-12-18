import {  Modal } from "antd"
import "../../../style/Modals.css"

interface ModalProps {
  isEducationOpen: boolean;
  setIsEducationOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Education: React.FC<ModalProps> = ({isEducationOpen, setIsEducationOpen}) => {

    const handleOk = () => {
        setIsEducationOpen(false);
      };
    
    const handleCancel = () => {
        setIsEducationOpen(false);
      };

    return (
        <Modal title="Education" 
        open={isEducationOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>
        <p>I have a Master of Research in History from the University of Edinburgh. This equipped me with in-depth research skills that I am able to transfer to coding. From my perspective, everything is researchable and no subject is too eclectic.</p>
        <p>In November 2023 I finished a Fullstack Developer Bootcamp at WBS Coding school. Here I learnt a range of Frontend, Backend and Database technology, including (but not exclusive to): HTML5, CSS3, JavaScript, React.js, SQL, Node.js, Express.js and MongoDB</p>
        <p>Since the Bootcamp, I have been challenging myself every week to learn something new. For example, I taught myself TypeScript, Tailwind CSS, Docker and basic Java.</p>
        <p>I firmly believe that if the motivation is there, you can learn anything</p>  
      </Modal>
    )
}

export default Education