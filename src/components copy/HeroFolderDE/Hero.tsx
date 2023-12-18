import "../../style/Hero.css";
import "../../style/HeroRes.css";
import Back from "../../assets/background.mp4";
import { DownOutlined } from "@ant-design/icons";

const Hero: React.FC = () => {
return (
<div className="heroBack">
        {Back ? (
        <video className="vidBack" loop={true} autoPlay={true} muted>
          <source src={Back} type="video/mp4" />
        </video>
        ) : <div className="vidBack">
          </div>}
        <div className="name">
          <h1>
            Darrell <br /> Roberts
          </h1>
          <h2>Fullstack Entwickler</h2>
          <div className="Vcon">
          <DownOutlined
            onClick={() =>
              window.scrollTo({
                top: 1000,
                behavior: "smooth",
              })
            }
            className="V"
          />
          
          </div>
        </div>
      </div>
)
}

export default Hero