import "./style/LanguageToggle.css"
import { Link } from "react-router-dom"

interface props {
showGerman: boolean;
setShowGerman: React.Dispatch<React.SetStateAction<boolean>>;
}

const LanguageToggle: React.FC<props> = ({showGerman, setShowGerman}) => {
    return (
        <div>
        {showGerman ? (
        <Link to="/">
        <button
        className="transButton" 
        onClick={() => setShowGerman(false)}>
        EN
        </button>
        </Link>
        ) : (
        <Link to="/de">
        <button
        className="transButton" 
        onClick={() => setShowGerman(true)}>
        DE
        </button>
        </Link>
        )
}
      </div>
    )
}

export default LanguageToggle