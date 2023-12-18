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
<p>Ich bin ein Quereinsteiger, der ursprünglich vier Jahre lang in der Digitalmarketing-Branche gearbeitet hat. Allerdings hatte ich schon immer eine Leidenschaft für das Programmieren, seitdem ich an einem <a className="underline" href="https://github.com/DarrellRoberts/microbit-competition" target="_blank">Microbit-Coding-Wettbewerb im Jahr 2018</a> teilgenommen und gewonnen habe. Mein größtes Bedauern war, damals nicht sofort die Karriere gewechselt zu haben.</p>

<p>Nichtsdestotrotz habe ich im Juli 2023 endlich den Schritt gewagt, als ich mich in einem Fullstack Developer Bootcamp eingeschrieben habe. Jetzt kann ich mir keine Zukunft mehr ohne das Programmieren vorstellen, denn es bereitet mir so viel Freude!</p>
      
      </Modal>
    )
}

export default Nutshell