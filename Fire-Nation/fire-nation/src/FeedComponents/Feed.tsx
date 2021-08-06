import React, { useState } from 'react';
import {Search, Person, Chat} from "@material-ui/icons";
import './Feed.css';
import UserPost from './PostUser/PostUser'
import PostFeed from './PostFeed/PostFeed'



const Sidebar = () => {


  return (
    <div className = "postHolder">
        <div className = "enterPost">
           {/*  <newPost/> */}
           <UserPost/>
        </div>
        <div className = "feed">
            <div className = "feedwrapper">
            {/* <allPost/> */}
            <PostFeed/>
            <h1>Help</h1>
            </div>
        </div>
        <div className = "feed">
            {/* <allPost/> */}
            <PostFeed/>
        </div>
        <div className = "feed">
            {/* <allPost/> */}
            <PostFeed/>
        </div>
        <div className = "feed">
            {/* <allPost/> */}
            <PostFeed/>
        </div>
        <div className = "feed">
            {/* <allPost/> */}
            <PostFeed/>
        </div>
        <div className = "feed">
            {/* <allPost/> */}
            <PostFeed/>
        </div>
        <div className = "feed">
            {/* <allPost/> */}
            <PostFeed/>
        </div>
        <div className = "feed">
            {/* <allPost/> */}
            <PostFeed/>
        </div>
        
    </div>
  );
};

export default Sidebar;