import React from 'react';
import "./postFeed.css";
import Dislike from './icons/*.png'
import Like from './icons/*.png'

const PostFeed = () => {
    return (
        <div className="post">
          <div className="postWrap">
            <div className="postTOP">
              <div className="postTopLeft">
                {/**Friend's profile image */}
                <img className="postProfileImg" src="" alt="" />
    
                {/**Friend's username */}
                <span className="postUsername">test test</span>
                
                {/**When the post was made */}
                <span className="postDate">July</span>
              </div>
              <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
              <span className="postText">Hi</span>
    
              {/**image in your friend's post */}
              <img className="postImg" src="" alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                {/**like button */}
                <img className="likeYou" src={Like} alt="" />
    
                {/**dislike button? maybe */}
                <img className="likeYou" src={Dislike} alt="" />
    
                {/**like counter */}
                <span className="postLikeCounter">put the like counter here</span>
              </div>
              <div className="postBottomRight"></div>
    
              {/**comment counter? do we want this? */}
              <span className="postCommentText">not trending -500</span>
            </div>
          </div>
        </div>
      );
}