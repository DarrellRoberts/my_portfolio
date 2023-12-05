import './App.css'
import './AppRes.css'
import Back from "./assets/background.mp4"
import { DownOutlined } from "@ant-design/icons"

const App: React.FC  = () => {

  return (
    <>
    <div>
      <video 
      className="" 
      loop 
      autoPlay="true"
      playbackRate="0.5"
      height="500px"
      muted>
      <source src={Back} type="video/mp4"/>
      </video>
      <div className="name">
      <h1>Darrell <br/> Roberts</h1>
      <h2>Fullstack Developer</h2>
      <DownOutlined 
      className="V"
      />
      </div>
    </div>
    <div className="h-screen bg-white">
    </div>
    </>
  )
}

export default App
