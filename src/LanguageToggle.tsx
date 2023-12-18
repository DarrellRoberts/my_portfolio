import "./style/LanguageToggle.css"

interface props {
showGerman: boolean;
setShowGerman: React.Dispatch<React.SetStateAction<boolean>>;
}

const LanguageToggle: React.FC<props> = ({showGerman, setShowGerman}) => {
    return (
        <div>
        {showGerman ? (
        <button
        className="transButton" 
        onClick={() => setShowGerman(false)}>
        EN
        </button>
        ) : (
        <button
        className="transButton" 
        onClick={() => setShowGerman(true)}>
        DE
        </button>
        )
}
      </div>
    )
}

export default LanguageToggle