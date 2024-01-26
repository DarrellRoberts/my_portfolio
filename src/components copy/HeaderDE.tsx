import "../style/Header.css"
import "../style/HeaderRes.css"
import { useEffect, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";


const HeaderDE: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [max, setMax] = useState(true);
    const [startFade, setStartFade] = useState(false)
    
    const handleFade = () => {
        const time = setTimeout(() => {
            setStartFade(true)
        }, 1000);
        return () => clearTimeout(time)
    }

    const handleFadeOut = () => {
            setStartFade(false)
    }
    
    const handleScroll = () => {
    setScrollPosition(window.scrollY);
    if (window.scrollY !== 0) {
    setMax(false)
    handleFadeOut()
    } else {
    setMax(true);
    handleFade()
    }
    };
    
    useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    handleFade();
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
><li 
className={`listHeader ${startFade ? "animate" : "hidden"}`}>
Start
    </li></a>
<a
onClick={() =>
    window.scrollTo({
    top: 1000,
    behavior: "smooth",
        })
}>
<li 
className={`listHeader ${startFade ? "animate" : "hidden"}`}>
Über mich</li></a>
<a
onClick={() =>
    window.scrollTo({
    top: 1900,
    behavior: "smooth",
        })
}
><li 
className={`listHeader ${startFade ? "animate" : "hidden"}`}>
Portfolio</li></a>
<a              
onClick={() =>
    window.scrollTo({
    top: 2700,
    behavior: "smooth",
        })
}>
<li 
className={`listHeader ${startFade ? "animate" : "hidden"}`}>
Fähigkeiten</li>
</a>
<a
onClick={() =>
    window.scrollTo({
    top: 3500,
    behavior: "smooth",
        })
}
><li 
className={`listHeader ${startFade ? "animate" : "hidden"}`}>
Kontakt</li>
    </a>
</ul>
) : (
<div className="p-8 fixed z-10 border-2 header-transition">
<LeftOutlined 
onClick={() => {setMax(true); handleFade()}}
className="innArr"
/> 
</div>    
)}
</>
)
}

export default HeaderDE

