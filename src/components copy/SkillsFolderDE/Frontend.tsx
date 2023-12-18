import "../../style/Skills.css"
import { Popover } from "antd";

const Frontend:React.FC = () => {
    return (
        <div className="skillsItem">
        <h3>Frontend</h3>
        <div className="skillsGrid">
        <Popover title="HTML5">
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="65" height="65" alt="HTML5" /></a>
        </Popover>
        <Popover title="CSS3">
        <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="65" height="65" alt="CSS3" /></a>
        </Popover>
        <Popover title="Tailwind CSS">
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="65" height="65" alt="TailwindCSS" /></a>
        </Popover>
        <Popover title="JavaScript">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="65" height="65" alt="JavaScript" /></a>
        </Popover>
        <Popover title="TypeScript">
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="65" height="65" alt="TypeScript" /></a>
        </Popover>
        <Popover title="React">
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="65" height="65" alt="React" /></a>
        </Popover>
        <Popover title="Vite">
        <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="65" height="65" alt="Vite" /></a>
        </Popover>
        </div>
        </div>
    )
}

export default Frontend