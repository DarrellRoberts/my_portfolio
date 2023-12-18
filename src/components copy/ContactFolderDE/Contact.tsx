import "../../style/Contact.css"
import "../../style/ContactRes.css"
import SocialLinks from "./SocialLinks"

const Contact:React.FC = () => {
    return (
<>
<div className="h-[800px] bg-primary">
<h2 className="contactTitle">Kontakt</h2>
<div className="flex justify-between items-center flex-col h-[500px] ">
<h3 className="text-5xl mt-20" >Schickt mir eine Email: <br/><a className="underline">mrdarrellroberts@gmail.com </a></h3>
<div className="flex-col ">
<h3 className="text-5xl">Oder erreicht mir auf LinkedIn oder GitHub</h3>
<SocialLinks />
</div>
</div>
</div>
</>
    )
}
export default Contact