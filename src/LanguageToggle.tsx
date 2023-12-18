interface props {
setShowGerman: React.Dispatch<React.SetStateAction<boolean>>;
}

const LanguageToggle: React.FC<props> = ({setShowGerman}) => {
    return (
        <div>
        <button onClick={() => setShowGerman(false)}>English</button>
        <button onClick={() => setShowGerman(true)}>Deutsch</button>
      </div>
    )
}

export default LanguageToggle