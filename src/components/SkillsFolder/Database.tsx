import "../../style/Skills.css"


const Database:React.FC = () => {
    return (
        <div className="skillsItem">
        <h3>Databases</h3>
        <div className="skillsGrid">
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="65" height="65" alt="MongoDB" /></a>
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="65" height="65" alt="MySQL" /></a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="65" height="65" alt="PostgreSQL" /></a>
        <a href="https://render.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/render-colored.svg" width="65" height="65" alt="Render" /></a>
        </div>
        </div>
    )
}

export default Database