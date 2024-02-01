import { useState, useRef } from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { Popover } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';
import '../../style/Carousel.css';
import '../../style/CarouselRes.css';

const Element = BannerAnim.Element;

interface data {
  pic: string;
  map: string;
  color: string;
  background: string
}

const textData = [
{
content: "Use the arrows to navigate through my previous or ongoing projects.",
title: 'Portfolio Carousel',
},
{
  content: "The BookClub Brothers is a website I created that is dedicated to a bookclub I formed with my old school friends in 2020. We all live in different countries so formed the club as a way of keeping in touch, whilst also reading fantastic books. This is a Full Stack project and so far has the following capabilities: jwt account registration and login, Cloudinary photo upload, user statistics, submit and edit book ratings, new book suggestion and book randomiser. This is my current project so bear with me if it's not complete. Stay tuned!",
  title: 'The BookClub Brothers (Solo Project - Current Project)',
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
  link: "https://bookclub-brothers.netlify.app/",
  Githublink:"https://github.com/DarrellRoberts/BookClubBrothers_Frontend"
  ,
  },
  {
    content: "This is the API I created for the BookClub Brothers website.",
    title: 'The BookClub Brothers API (Solo Project)',
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
    link: "https://bookclubbrothers-backend.onrender.com/books",
    Githublink:"https://github.com/DarrellRoberts/BookClubBrothers_Backend-API",
    },
{
content: "TeamUp is an app I created with three other group members at my Full-stack Developer Bootcamp. It's designed for users new to a city in Germany and want to meet new people via sports. The app has many features, such as: account creation and login, profile editing, user rating, badges, searching for events, joining events, creating events, liking events, submitting comments, replying to comments and more. We were selected to present this project at the end of the bootcamp to an audience of over 150 people. I along with another team member worked primarily on the Front-end, whilst our other two group members worked on the Back-end",
title: 'TeamUp (Group Project - 4)',
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
content: "This Pokifight game was created by myself and another group member. I took on the role of the Front-end developer whilst they took over the Back-end. We used a pokemon API in order to fetch and display over 800 characters. Then we added multiple features, such as: username entry, enable and disable soundtrack, player selection, tutorial, opponent randomiser, game mechanics and a dynamic player leaderboard.",
title: 'Pokifight Game (Group Project - 2)',
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
content: "Using TypeScript I created a pirate-themed tool to track either you personal or business to-dos. Looking at other similar applications or to-do lists, it struck me at how dull and uninspiring they were. Therefore, I chose to go with a pirate-theme to make it more interesting and to actually make the user want to return to their to-do list.",
title: 'Pirate-themed Work Management Tool (Solo Project)',
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
  content: "That was just a handful of my projects but be sure to come back as I update this portfolio regularly.",
  title: 'I hope you saw something you liked!',
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
    map: "https://i.imgur.com/QLkieHk.png",
    color: '#808080',
    background: '#000',
  },
  {
    pic: '',
    map: 'https://i.imgur.com/T2aJwcz.png',
    color: 'rgb(72, 150, 72)',
    background: 'rgb(43, 88, 43)',
  },
  {
    pic:'',
    map: "https://i.imgur.com/1RoPh6h.png",
    color: '#93a5ca',
    background: '#8298c6',
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
        <span key="span"><a target="_blank" href={item[i].link}>{item[i].link ? `URL` : null}</a></span>
        <br/>
        <a key="a" target="_blank" href={item[i].Githublink}>{item[i].Githublink ? `GitHub Repository` : null}</a>
        <div key="div">{item[i].stack}</div>
      </QueueAnim>
    </Element>
  ));

  return (
    <>
    <div className="bg-primary">
    <div className={className ? `${className}-wrapper projectCon` : `bg-primary h-screen`} style={{ background: mapArray[showInt].background }}>
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
          {showInt > 0 && (
          <LeftOutlined style={{color: "black"}} type="left" key="left" onClick={onLeft} />)}
          {showInt < mapArray.length - 1 && (<RightOutlined style={{color: "black"}} type="right" key="right" onClick={onRight} />)}
      </div>
    </div>
    </div>
    </>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
};

export default Carousel;
