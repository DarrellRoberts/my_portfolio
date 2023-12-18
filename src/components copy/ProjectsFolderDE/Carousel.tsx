import { useState, useRef } from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import { Popover } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';
import '../../style/Carousel.css';
import '../../style/CarouselRes.css';
import { OverPack } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
const Element = BannerAnim.Element;

interface data {
  pic: string;
  map: string;
  color: string;
  background: string
}

const textData = [
  {
    content: "Verwenden Sie die Pfeile, um durch meine bisherigen oder laufenden Projekte zu navigieren.",
    title: 'Portfolio Karussell',
  }
  ,
{
content: "TeamUp ist eine App, die ich mit drei anderen Gruppenmitgliedern während meines Full-Stack Developer Bootcamps erstellt habe. Sie ist für Benutzer konzipiert, die neu in einer Stadt in Deutschland sind und über Sport neue Leute kennenlernen möchten. Die App verfügt über viele Funktionen, darunter: Kontoerstellung und -anmeldung, Profilbearbeitung, Benutzerbewertung, Abzeichen, Suche nach Veranstaltungen, Teilnahme an Veranstaltungen, Erstellung von Veranstaltungen, Liken von Veranstaltungen, Abgeben von Kommentaren, Beantworten von Kommentaren und mehr. Wir wurden ausgewählt, dieses Projekt am Ende des Bootcamps vor einem Publikum von über 150 Personen zu präsentieren. Ich habe zusammen mit einem anderen Teammitglied hauptsächlich am Frontend gearbeitet, während unsere beiden anderen Gruppenmitglieder am Backend gearbeitet haben.",
title: 'TeamUp (Gruppenprojekt - 4)',
stack: (
<div className="flex justify-evenly mt-3">
<Popover title="MongoDB">
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="50" height="50" alt="MongoDB" />
</Popover>
<Popover title="Express.js">
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="50" height="50" alt="Express" />
</Popover>
<Popover title="React">
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="50" height="50" alt="React" />
</Popover>
<Popover title="Node.js">
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="50" height="50" alt="NodeJS" />
</Popover >
</div>
),
link: "https://teamup-de.netlify.app/",
Githublink:"https://github.com/hari-pace/TeamUp"
,
},
{
content: "Die BookClub Brothers ist eine Website, die ich erstellt habe und die einem Buchclub gewidmet ist, den ich 2020 mit meinen alten Schulfreunden gegründet habe. Wir leben alle in verschiedenen Ländern, daher haben wir den Club als Möglichkeit gegründet, in Kontakt zu bleiben und gleichzeitig fantastische Bücher zu lesen. Dies ist ein Full-Stack-Projekt und hat bisher folgende Funktionen: JWT-Kontoerstellung und -anmeldung, Cloudinary-Foto-Upload, Benutzerstatistiken, Bewertung von Büchern, Vorschlag neuer Bücher und Zufallsbuchauswahl. Ich habe bisher das Backend und die API erstellt, die Sie einsehen können. Ich arbeite derzeit am Frontend, das später fertiggestellt wird.",
title: 'The BookClub Brothers API (Soloprojekt)',
stack: (
  <div className="flex justify-evenly mt-3">
  <Popover title="MongoDB">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="50" height="50" alt="MongoDB" />
  </Popover>
  <Popover title="Express.js">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="50" height="50" alt="Express" />
  </Popover>
  <Popover title="Node.js">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="50" height="50" alt="NodeJS" />
  </Popover >
  </div>
  ),
link: "https://bookclubbrothers-backend.onrender.com/",
Githublink:"https://github.com/DarrellRoberts/BookClubBrothers_Backend-API",
},
{
content: "Dieses Pokifight-Spiel wurde von mir und einem anderen Gruppenmitglied erstellt. Ich habe die Rolle des Frontend-Entwicklers übernommen, während sie sich um das Backend gekümmert haben. Wir haben eine Pokémon-API verwendet, um über 800 Charaktere abzurufen und anzuzeigen. Dann haben wir mehrere Funktionen hinzugefügt, wie zum Beispiel: Benutzernameneingabe, Aktivieren und Deaktivieren des Soundtracks, Spieler-Auswahl, Tutorial, Zufallsgenerator für Gegner, Spielmechanik und eine dynamische Spieler-Bestenliste.",
title: 'Pokifight Game (Gruppenprojekt - 2)',
stack: (
  <div className="flex justify-evenly mt-3">
  <Popover title="MongoDB">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="50" height="50" alt="MongoDB" />
  </Popover>
  <Popover title="Express.js">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="50" height="50" alt="Express" />
  </Popover>
  <Popover title="React">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="50" height="50" alt="React" />
  </Popover>
  <Popover title="Node.js">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="50" height="50" alt="NodeJS" />
  </Popover >
  </div>
  ),
link: "https://golden-fudge-4d4499.netlify.app/",
Githublink: "https://github.com/DarrellRoberts/pokifight_frontend",
  },
{
content: "Unter Verwendung von TypeScript habe ich ein Tool mit einem Piraten-Thema erstellt, um entweder Ihre persönlichen oder geschäftlichen Aufgaben zu verfolgen. Beim Betrachten anderer ähnlicher Anwendungen oder To-Do-Listen ist mir aufgefallen, wie langweilig und wenig inspirierend sie waren. Daher habe ich mich entschieden, ein Piraten-Thema zu verwenden, um es interessanter zu gestalten und den Benutzer tatsächlich dazu zu bringen, zu seiner To-Do-Liste zurückzukehren",
title: 'Arbeitsmanagement-Tool (Soloprojekt)',
stack: (
  <div className="flex justify-evenly mt-3">
  <Popover title="React">
  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="50" height="50" alt="React" />
  </Popover>
  <Popover title="TypeScript"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="50" height="50" alt="TypeScript" />
  </Popover>
  <Popover title="Tailwind CSS">
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="50" height="50" alt="TailwindCSS" />
  </Popover>
  </div>
  ),
link: "",
Githublink: "https://github.com/DarrellRoberts/pirate-work-management-tool",
      },
{
  content: "Das war nur eine Handvoll meiner Projekte, aber schauen Sie immer wieder vorbei, da ich dieses Portfolio regelmäßig aktualisiere.",
  title: 'Ich hoffe, Sie haben etwas gefunden, das Ihnen gefällt!',
}
    ]
;

const dataArray:data[] = [
  {
    pic:'',
    map: "https://i.imgur.com/UfNLSSP.png",
    color: '#298e89',
    background: '#207673',
  },
  {
    pic:'',
    map: "https://i.imgur.com/1RoPh6h.png",
    color: '#93a5ca',
    background: '#8298c6',
  },
  {
    pic: '',
    map: 'https://i.imgur.com/T2aJwcz.png',
    color: 'rgb(72, 150, 72)',
    background: 'rgb(43, 88, 43)',
  },
  {
    pic: '',
    map: 'https://i.imgur.com/bgwXOVU.png',
    color: '#03115c',
    background: '#020a33',
  },
  {
    pic: '',
    map: 'https://i.imgur.com/yBSWHQp.png',
    color: '#E3CAA2',
    background: '#c4ac89',
  },
  {
  pic:'',
  map: "https://i.imgur.com/UfNLSSP.png",
  color: '#298e89',
  background: '#207673'
  }
];
const mapArray = dataArray.map(item => ({ ...item, ...textData }));

const Carousel = ({ className = 'details-switch-demo' }) => {
  const [showInt, setShowInt] = useState(0);
  const [delay, setDelay] = useState(0);
  const [imgAnim, setImgAnim] = useState([
    { translateX: [0, 300], opacity: [1, 0] },
    { translateX: [0, -300], opacity: [1, 0] },
  ]);
  const [oneEnter, setOneEnter] = useState(false);

  // Refs for BannerAnim instances
  const bannerImgRef = useRef(null);
  const bannerTextRef = useRef(null);

  const onChange = () => {
    if (!oneEnter) {
      setDelay(300);
      setOneEnter(true);
    }
  };

  const onLeft = () => {
    let newShowInt = showInt - 1;
    const newImgAnim = [
      { translateX: [0, -300], opacity: [1, 0] },
      { translateX: [0, 300], opacity: [1, 0] },
    ];
    if (newShowInt < 0) {
      newShowInt = 0;
    }
    setShowInt(newShowInt);
    setImgAnim(newImgAnim);
    bannerImgRef.current.prev(); // Accessing prev method using useRef
    bannerTextRef.current.prev(); // Accessing prev method using useRef
  };

  const onRight = () => {
    let newShowInt = showInt + 1;
    const newImgAnim = [
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opacity: [1, 0] },
    ];
    if (newShowInt >= mapArray.length) {
      newShowInt = mapArray.length - 1;
    }
    setShowInt(newShowInt);
    setImgAnim(newImgAnim);
    bannerImgRef.current.next(); // Accessing next method using useRef
    bannerTextRef.current.next(); // Accessing next method using useRef
  };

  const getDuration = (e) => {
    return e.key === 'map' ? 800 : 1000;
  };

  const imgChildren = mapArray.map((item, i) => (
    <Element
      key={i}
      style={{
        background: item.color,
        height: '100%',
      }}
      leaveChildHide
    >
      <QueueAnim
        animConfig={imgAnim}
        duration={getDuration}
        delay={[!i ? delay : 300, 0]}
        ease={['easeOutCubic', 'easeInQuad']}
        key="img-wrapper"
      >
        <div className={`${className}-map map${i}`} key="map">
          <img src={`${item.map}`} alt="" width="100%" />
        </div>
        <div className={`${className}-pic pic${i}`} key="pic">
          <img src={item.pic} alt="" width="100%" />
        </div>
      </QueueAnim>
    </Element>
  ));

  const textChildren = mapArray.map((item, i) => (
    <Element key={i}>
      <QueueAnim type="bottom" duration={1000} delay={[!i ? delay + 500 : 800, 0]}>
        <h1 key="h1">{item[i].title}</h1>
        <em key="em" style={{ background: item.background }} />
        <p key="p">{item[i].content}</p>
        <span key="span"><a href={item[i].link}>{item[i].link ? `URL` : null}</a></span>
        <br/>
        <a key="a" href={item[i].Githublink}>{item[i].Githublink ? `GitHub Repository` : null}</a>
        <div key="div">{item[i].stack}</div>
      </QueueAnim>
    </Element>
  ));

  return (
    <>
    <div className={className ? `${className}-wrapper` : `bg-primary h-screen`} style={{ background: mapArray[showInt].background }}>
    <OverPack
    id="skills" 
    className="">      
    <TweenOne
        key="0"
        animation={{ opacity: 1 }}
        className="code-box-shape"
          style={{ opacity: 0 }}
      />
      <QueueAnim
        key="queue"
        className=""
        leaveReverse
      > 
    <h3 key="a"
    className="projectTitle">Portfolio</h3>
      <div
      key="b" 
      className={className}>
        <BannerAnim
          prefixCls={`${className}-img-wrapper`}
          sync
          type="across"
          duration={1000}
          ease="easeInOutExpo"
          arrow={false}
          thumb={false}
          onChange={onChange}
          dragPlay={false}
          ref={bannerImgRef}
        >
          {imgChildren}
        </BannerAnim>
        <BannerAnim
          prefixCls={`${className}-text-wrapper`}
          sync
          type="across"
          duration={1000}
          arrow={false}
          thumb={false}
          ease="easeInOutExpo"
          dragPlay={false}
          ref={bannerTextRef}
        >
          {textChildren}
        </BannerAnim>
        <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}>
          {showInt > 0 && (
          <LeftOutlined style={{color: "black"}} type="left" key="left" onClick={onLeft} />)}
          {showInt < mapArray.length - 1 && (<RightOutlined style={{color: "black"}} type="right" key="right" onClick={onRight} />)}
        </TweenOneGroup>
      </div>
      </QueueAnim>
    </OverPack>
    </div>
    </>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
};

export default Carousel;
