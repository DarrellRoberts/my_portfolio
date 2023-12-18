import "../../style/Skills.css"
import { Popover } from "antd";

const Database:React.FC = () => {
    return (
        <div className="skillsItem">
        <h3>Databases</h3>
        <div className="skillsGrid">
        <Popover title="MongoDB">
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="65" height="65" alt="MongoDB" /></a>
        </Popover>
        <Popover title="MySQL">
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="65" height="65" alt="MySQL" /></a>
        </Popover>
        <Popover title="PostgreSQL">
        <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="65" height="65" alt="PostgreSQL" /></a>
        </Popover>
        <Popover title="Render">
        <a href="https://render.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/render-colored.svg" width="65" height="65" alt="Render" /></a>
        </Popover>
        </div>
        </div>
    )
}

export default Database