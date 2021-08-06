import React, { useState } from 'react';
import Topbar from "./TopBar";
import Sidebar from "../SideBarComponents/SideBar";
import Feed from "../FeedComponents/Feed";
//import sample from './fire.mp4';
import "./MainMenu.css";



const MainMenu = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
        <Topbar/>
        {/* <video className='background-video' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
        </video> */}

        <div className = "mainBody">
            <Sidebar/>
            <Feed/>
            <Sidebar/>
        </div>
    </>
  );
};

export default MainMenu;