import Ham from "../assets/hamburgericon.png"
import "../style/Header.css"
import { useEffect, useState } from "react";


const Header: React.FC = () => {
const [scrollPosition, setScrollPosition] = useState(0);

const handleScroll = () => {
setScrollPosition(window.scrollY);
};
  
useEffect(() => {
// Attach the event listener when the component mounts
window.addEventListener('scroll', handleScroll);
  
// Clean up the event listener when the component unmounts
return () => {
window.removeEventListener('scroll', handleScroll);
};
}, []);

return (
    <>
{scrollPosition !== 0 ? (
    <div className="bg-primary p-8 fixed z-10 border-2 header-transition">
    <img className="w-10 invert cursor-pointer" src={Ham} alt="hamburger_icon" />   
    </div>
) : (
    <div className="w-screen bg-primary p-8 z-10 header-transition">
    <img className="w-10 invert cursor-pointer" src={Ham} alt="hamburger_icon" />   
    </div>  
)}
</>
)
}

export default Header