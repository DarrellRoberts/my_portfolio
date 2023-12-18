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
<p>Mit meinen vier Jahren Erfahrung im Digitalmarketing habe ich gelernt, das Projektmanagement zu perfektionieren und sowohl die Fristen des Unternehmens als auch die der Kunden einzuhalten. Ich habe mehrere Millionen Euro (jährliche) Budgets für Kunden wie Easyjet verwaltet und dabei auch kleinere Ausgaben für verschiedene Startups in Berlin überwacht.</p>

<p>Das Fullstack Developer Bootcamp, das ich 2023 abgeschlossen habe, ermöglichte es mir, meine Programmiererfahrung zu beschleunigen, sei es bei Einzelprojekten oder in der Gruppe. Ich habe regelmäßig in Teams gearbeitet, hauptsächlich für wöchentliche Projekte, aber auch für eintägige Hackathons 

<a href="https://github.com/DarrellRoberts/flag-app" className="underline" target="_blank"> (bei einem habe ich mit meinem Team gewonnen).</a>

</p>

<p>Derzeit arbeite ich nicht nur an eigenen Projekten, sondern leiste auch Beiträge zu Open-Source-Repositories.</p>

<p>Wenn Sie an einigen meiner Arbeiten interessiert sind, finden Sie mein Portfolio unten.</p>

      </Modal>
    )
}

export default Experience