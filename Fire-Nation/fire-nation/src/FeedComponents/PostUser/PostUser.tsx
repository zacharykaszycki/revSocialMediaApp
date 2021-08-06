import React, { useState }  from 'react';
import "./postModular.css";
import upload from './icons/upload.png';


const UserPost = () => {
    return (
        <div className="postMod">
          <div className="postWrapMod">
            {/**Your profile image */}
            <img className="profileImg" src="" alt="" />
    
            {/**Friend's username */}
            <span className="postUser">test test</span>
           
            <div>
                
            {/**Text post */}
            <input placeholder="What's up chap?" className="postMates" />
    
            </div>
            
          </div>
          <hr className="elementCenter" />
    
          {/**Lower section of post box area where you can insert a extra item */}
          <div className="shareBottom">
            <div className="shareOptions">
              {/**Photo*/}
              <div className="shareOption">
                <img className="shareIcon" src={upload} alt="" />
                <span className="shareOptionText">Photo or Video</span>
              </div>
            </div>
    
            {/**Post to DB button */}
            <button className="shareButton">Share</button>
          </div>
        </div>
      );
}