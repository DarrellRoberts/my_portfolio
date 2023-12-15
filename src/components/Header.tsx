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
<ul className="w-screen bg-primary z-10 flex justify-evenly items-center text-center border-white border-2">
<a
onClick={() =>
    window.scrollTo({
    top: 10,
    behavior: "smooth",
        })
}
><li className="listHeader">Home</li></a>
<a
onClick={() =>
    window.scrollTo({
    top: 1000,
    behavior: "smooth",
        })
}><li className="listHeader">About</li></a>
<a
onClick={() =>
    window.scrollTo({
    top: 1900,
    behavior: "smooth",
        })
}
><li className="listHeader">Portfolio</li></a>
<a              
onClick={() =>
    window.scrollTo({
    top: 2700,
    behavior: "smooth",
        })
}><li className="listHeader">Skills</li></a>
<a
onClick={() =>
    window.scrollTo({
    top: 3500,
    behavior: "smooth",
        })
}
><li className="listHeader">Contact</li></a>
</ul>
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

