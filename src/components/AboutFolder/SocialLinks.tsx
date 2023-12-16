


const SocialLinks: React.FC = () => {

return (
<>
<p className="flex ml-40 mt-5">
    <a
    className="hover:rotate-45 transition-all"
    href="https://www.github.com/DarrellRoberts" 
    target="_blank" 
    rel="noreferrer"> 
    <picture><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="95" height="95" /></picture></a> 
    <a
    className="mr-10 ml-10 hover:rotate-45 transition-all" 
    href="https://www.linkedin.com/in/droberts-developer" 
    target="_blank" 
    rel="noreferrer"> 
    <picture><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="95" height="95" /></picture></a>
</p>
</>
)
}

export default SocialLinks

