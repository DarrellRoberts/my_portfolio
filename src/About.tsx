import "./style/About.css"
import Profilbildbw from "./assets/Profilbildbw.jpg"

const About: React.FC = () => {
    return (
<div className="h-[800px]">
<h1 className="aboutTitle">About</h1>
<img src={Profilbildbw} 
alt="profile_picture" 
width="400" 
className="ml-20 rounded-lg"
/>
</div>
    )
}

export default About