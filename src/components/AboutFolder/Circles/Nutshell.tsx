import {  Modal } from "antd"
import "../../../style/Modals.css"

interface ModalProps {
  isNutShellOpen: boolean;
  setIsNutShellOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nutshell: React.FC<ModalProps> = ({isNutShellOpen, setIsNutShellOpen}) => {

    const handleOk = () => {
        setIsNutShellOpen(false);
      };
    
    const handleCancel = () => {
        setIsNutShellOpen(false);
      };

    return (
        <Modal title="In a nutshell" 
        open={isNutShellOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>
        <p>I'm a career changer who originally worked for four years in the digital marketing industry. However, I always had a passion for coding, ever since I won a 
          <a  className="underline"href="https://github.com/DarrellRoberts/microbit-competition" target="_blank"> Microbit coding competition in 2018 </a>. 
        My biggest regret was not changing careers then and there. </p>
        <p>Nevertheless, I finally made the change in July 2023 when I enrolled in a Fullstack Developer Bootcamp. Now I can't imagine a future without coding as it brings me such joy!</p>
      </Modal>
    )
}

export default Nutshell