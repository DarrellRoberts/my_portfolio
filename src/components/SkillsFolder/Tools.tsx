import "../../style/Skills.css"

const Skills:React.FC = () => {
    return (
        <div className="skillsItem">
        <h3>Tools</h3>
        <div className="skillsGrid">
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="65" height="65" alt="Git" /></a>
        <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" width="65" height="65" alt="Docker" /></a>
        <a href="https://www.adobe.com/uk/products/photoshop.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg" width="65" height="65" alt="Photoshop" /></a>
        </div>
        </div>
    )
}

export default Skills