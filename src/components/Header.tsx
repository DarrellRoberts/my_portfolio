import "../style/Header.css"
import "../style/HeaderRes.css"
import { useEffect, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";


const Header: React.FC = () => {
const [scrollPosition, setScrollPosition] = useState(0);
const [max, setMax] = useState(true);

const handleScroll = () => {
setScrollPosition(window.scrollY);
if (window.scrollY !== 0) {
setMax(false)
} else {
setMax(true)
}
};

useEffect(() => {
// Attach the event listener when the component mounts
window.addEventListener('scroll', handleScroll);
  
// Clean up the event listener when the component unmounts
return () => {
window.removeEventListener('scroll', handleScroll);
};
},
 []);
return (
    <>
{max ? (
<div className="w-screen bg-primary p-8 z-10">
<LeftOutlined 
onClick={() => setMax(false)}
className="outArr"
/>
<ul className="flex justify-evenly items-center">
<li>Home</li>
<li>Skills</li>
<li>Portfolio</li>
<li>About</li>
<li>Contact</li>
</ul>
</div>
) : (
<div className="p-8 fixed z-10 border-2 header-transition">
<LeftOutlined 
onClick={() => setMax(true)}
className="innArr"
/> 
</div>    
)}
</>
)
}

export default Header

