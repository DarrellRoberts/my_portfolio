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
 scrollPosition;
return (
    <>
{max ? (
<div className="w-screen bg-primary z-10">
<LeftOutlined 
onClick={() => setMax(false)}
className="outArr"
/>
<ul className="flex justify-evenly text-center">
<a className="headerLinks" href=""><li>Home</li></a>
<a className="headerLinks" href=""><li>Skills</li></a>
<a className="headerLinks" href=""><li>Portfolio</li></a>
<a className="headerLinks" href=""><li>Contact</li></a>
<a className="headerLinks" href=""><li>About</li></a>
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

