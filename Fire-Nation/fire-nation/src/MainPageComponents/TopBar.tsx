import React, { useState } from 'react';
import { Search, Person, Chat } from '@material-ui/icons';
import './TopBar.css';

const Topbar = () => {




  return (
    <>
        <div className = "topNavBarContainer">
            <div className = "topNavBarLeft">
                <img className='topLogoImg' src='./FireNationSymbol.png' alt='Symbol' />
                <span className = "navBarLogo">FIRE Nation </span>
            </div>
            <div className = "topNavBarCenter">
                <div className = "searchBar">
                    <Search className = "searchIcon"/>
                    <input type = "text" placeholder = "This is a search bar" className = "searchInput" ></input>
                </div>
            </div>
            <div className = "topNavBarRight">
                <div className = "topNavBarLinks">
                    <span className = "link">HomePage</span>
                    <span className = "link">Profile</span>
                    <span className = "link">LiveFeed</span>
                </div>
                {/* <div className = "topNavBarIcons">
                    <div className = "topNavBarIcon" >
                        <Person/>
                        <span className = "topBarIconNumber">1</span>
                    </div>
                    <div className = "topNavBarIcon" >
                        <Chat/>
                        <span className = "topBarIconNumber">1</span>
                    </div>
                </div> */}

                <img src = "https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg" alt = "" className = "topNavBarPic"/>
            </div>


        </div>
    </>
  );
};

export default Topbar;