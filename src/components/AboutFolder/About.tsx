import "../../style/About.css"
import Profilbildbw from "../../assets/Profilbildbw.jpg"
import SocialLinks from "../SocialLinks"

const About: React.FC = () => {
    return (
<div className="h-[800px]">
<h1 className="aboutTitle">About</h1>
<div className="flex justify-between">
<img src={Profilbildbw} 
alt="profile_picture" 
width="400" 
className="ml-20 rounded-lg"
/>
<div className="circle1">
<h2>In a nutshell</h2>
</div>
<div className="circle2">
<h2>Education</h2>
</div>
<div className="circle3">
<h2>Experience</h2>
</div>
</div>
<SocialLinks />
</div>
    )
}

export default About