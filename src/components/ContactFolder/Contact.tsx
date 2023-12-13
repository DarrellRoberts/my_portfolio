import "../../style/Contact.css"

const Contact:React.FC = () => {
    return (
<>
<div className="h-[800px] bg-primary">
<h2 className="contactTitle">Contact</h2>
<div className="flex justify-center items-center flex-col overflow-visible ">
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeba6ZIZi2HQ-QulNeJCxUms9EfsAAREhxVzX9wyWU1ze_zUg/viewform?embedded=true" width="640" height="721">Loading…</iframe>
<p className="flex">
    <a
    className="mr-10 ml-10"
    href="https://www.github.com/DarrellRoberts" 
    target="_blank" 
    rel="noreferrer"> 
    <picture><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="200" height="200" /></picture></a> 
    <a
    className="mr-10 ml-10" 
    href="https://www.linkedin.com/in/droberts-developer" 
    target="_blank" 
    rel="noreferrer"> 
    <picture><img className="brightness-0" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="200" height="200" /></picture></a>
    <a
    className="mr-10 ml-10" 
    href="https://www.linkedin.com/in/droberts-developer" 
    target="_blank" 
    rel="noreferrer"><picture><img className="" src="https://static.vecteezy.com/system/resources/previews/022/484/508/original/google-mail-gmail-icon-logo-symbol-free-png.png" width="200" height="200" /> </picture> </a>
</p>
</div>
</div>
</>
    )
}
export default Contact