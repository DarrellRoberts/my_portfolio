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
        <Modal title="Ausbildung" 
        open={isEducationOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>
<p>Ich habe einen Master of Research in Geschichte von der University of Edinburgh. Dies hat mich mit tiefgehenden Forschungsfähigkeiten ausgestattet, die ich auf das Programmieren übertragen kann. Aus meiner Perspektive ist alles erforschbar, und kein Thema ist zu eklektisch.</p>

<p>Im November 2023 habe ich ein Fullstack Developer Bootcamp an der WBS Coding School abgeschlossen. Hier habe ich eine Vielzahl von Frontend-, Backend- und Datenbanktechnologien gelernt, einschließlich (aber nicht ausschließlich): HTML5, CSS3, JavaScript, React.js, SQL, Node.js, Express.js und MongoDB.</p>

<p>Seit dem Bootcamp stelle ich mich jede Woche der Herausforderung, etwas Neues zu lernen. Zum Beispiel habe ich mir selbst TypeScript, Tailwind CSS, Docker und grundlegendes Java beigebracht.</p>

<p>Ich bin fest davon überzeugt, dass man, wenn die Motivation da ist, alles lernen kann.</p>
      </Modal>
    )
}

export default Education