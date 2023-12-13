import "../style/Footer.css"
import "../style/FooterRes.css"


const Footer: React.FC = () => {

return (
<>
<p className="flex-col">
    <a
    className="mr-10"
    href="https://www.github.com/DarrellRoberts" 
    target="_blank" 
    rel="noreferrer"> 
    <picture><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="100" height="100" /></picture></a> 
    <a
    className="mr-10 ml-10" 
    href="https://www.linkedin.com/in/droberts-developer" 
    target="_blank" 
    rel="noreferrer"> 
    <picture><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="100" height="100" /></picture></a>
</p>
</>
)
}

export default Footer

