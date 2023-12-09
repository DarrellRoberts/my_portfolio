import React, { useState, useRef } from 'react';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';
import './Carousel.css';

const Element = BannerAnim.Element;

const textData = [
{
content: "Use the arrows to navigate through my previous or ongoing projects.",
title: 'Portfolio Carousel',
},
{
content: "TeamUp is an app I created with three other group members at my Full-stack Developer Bootcamp. It's designed for users new to a city in Germany and want to meet new people via sports. The app has many features, such as: account creation and login, profile editing, user rating, badges, searching for events, joining events, creating events, liking events, submitting comments, replying to comments and more. We were selected to present this project at the end of the bootcamp to an audience of over 150 people. I along with another team member worked primarily on the Front-end, whilst our other two group members worked on the Back-end",
title: 'TeamUp (Group Project - 4)',
stack: "MERN",
link: "https://teamup-de.netlify.app/",
Githublink: "https://github.com/hari-pace/TeamUp",
},
{
content: "The BookClub Brothers is a website I created that is dedicated to a bookclub I formed with my former school friends in 2020. We all live in different countries so formed the club as a way of keeping in touch whilst also reading fantastic books. This is a Full-stack project and will many capabilities, such as: account registration and login with Cloudinary photo upload, view user statistics and scores, score books directly on the website, suggest new books and run a function to select one at random and many more. This is a huge project and I am currently working on the Back-end and API which you can view. The Front-end will come later",
title: 'The BookClub Brothers (Solo Project)',
stack: "MERN (for now, only Node.js, Express.js and MongoDB with deployment on Render)",
link: "https://bookclubbrothers-backend.onrender.com/",
Githublink:"https://github.com/DarrellRoberts/BookClubBrothers_Backend-API",
},
{
content: "This Pokifight game was created by myself and another group member. I took on the role of the Front-end developer whilst they took over the Back-end. We used a pokemon API in order to fetch and display over 800 characters. Then we added multiple features, such as: username entry, enable and disable soundtrack, player selection, tutorial, opponent randomiser, game mechanics and a dynamic player leaderboard.",
title: 'Pokifight Game (Group Project - 2)',
stack: "MERN",
link: "https://golden-fudge-4d4499.netlify.app/",
Githublink: "https://github.com/DarrellRoberts/pokifight_frontend",
  },
{
content: "Using TypeScript I created a pirate-themed tool to track either you personal or business to-dos. Looking at other similar applications or to-do lists, it struck me at how dull and uninspiring they were. Therefore, I chose to go with a pirate-theme to make it more interesting and to actually make the user want to return to their to-do list.",
title: 'Pirate-themed Work Management Tool (Solo Project)',
stack: "TypeScript with React and Tailwind CSS",
link: "",
Githublink: "https://github.com/DarrellRoberts/pirate-work-management-tool",
      },
{
  content: "That was just a handful of my projects but be sure to come back as I update this portfolio regularly.",
  title: 'I hope you saw something you liked!',
}
    ]
;

let dataArray = [
  {
    pic:'',
    map: "",
    color: '#298e89',
    background: '#207673',
  },
  {
    pic:'https://i.imgur.com/hHx551i.jpg',
    map: "https://i.imgur.com/FQ8lPtR.jpg",
    color: '#93a5ca',
    background: '#8298c6',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/iCVhrDRFOAJnJgy.png',
    map: 'https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png',
    color: 'green',
    background: 'green',
  },
  {
    pic: '',
    map: 'https://i.imgur.com/iU2NqKT.jpg',
    color: '#03115c',
    background: '#020a33',
  },
  {
    pic: '',
    map: 'https://i.imgur.com/0WvvF7L.jpg',
    color: '#E3CAA2',
    background: '#c4ac89',
  },{
  pic:'',
  map: "",
  color: '#298e89',
  background: '#207673'
  }
];
dataArray = dataArray.map(item => ({ ...item, ...textData }));

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
    if (newShowInt >= dataArray.length) {
      newShowInt = dataArray.length - 1;
    }
    setShowInt(newShowInt);
    setImgAnim(newImgAnim);
    bannerImgRef.current.next(); // Accessing next method using useRef
    bannerTextRef.current.next(); // Accessing next method using useRef
  };

  const getDuration = (e) => {
    return e.key === 'map' ? 800 : 1000;
  };

  const imgChildren = dataArray.map((item, i) => (
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
          <img src={item.map} alt="" width="100%" />
        </div>
        <div className={`${className}-pic pic${i}`} key="pic">
          <img src={item.pic} alt="" width="100%" />
        </div>
      </QueueAnim>
    </Element>
  ));

  const textChildren = dataArray.map((item, i) => (
    <Element key={i}>
      <QueueAnim type="bottom" duration={1000} delay={[!i ? delay + 500 : 800, 0]}>
        <h1 key="h1">{item[i].title}</h1>
        <em key="em" style={{ background: item.background }} />
        <p key="p">{item[i].content}</p>
        <span key="span">{item[i].link ? `URL: ${item[i].link}` : null}</span>
        <a key="a">{item[i].Githublink ? `GitHub Repo: ${item[i].Githublink}` : null}</a>
      </QueueAnim>
    </Element>
  ));

  return (
    <>
    <div className={`${className}-wrapper`} style={{ background: dataArray[showInt].background }}>
    <h3 className="projectTitle">Portfolio</h3>
      <div className={className}>
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
          {showInt < dataArray.length - 1 && (<RightOutlined style={{color: "black"}} type="right" key="right" onClick={onRight} />)}
        </TweenOneGroup>
        <h1>HELLO</h1>
      </div>
      <h1>HELLO</h1>
    </div>
    <button onClick={onRight}>On Right</button>
    <button onClick={onLeft}>On Left</button>
    </>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
};

export default Carousel;
