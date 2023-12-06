import "../../style/Skills.css"

const Backend:React.FC = () => {
    return (
        <div className="skillsItem">
        <h3>Backend</h3>
        <div className="skillsGrid">
        <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="65" height="65" alt="NodeJS" /></a>
        <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="65" height="65" alt="Express" /></a>
        <a href="https://java.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" width="65" height="65" alt="Java" /></a>
        </div>
        </div>
    )
}

export default Backend