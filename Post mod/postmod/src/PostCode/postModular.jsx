import "./postModular.css";
import upload from "./icons/upload.PNG";

export default function YourPost() {
  return (
    <div class="postMod">
      <div class="postWrapMod">
        {/**Your profile image */}
        <img class="profileImg" src="" alt="" />

        {/**Friend's username */}
        <span className="postUser">test test</span>
       
        <div>
            
        {/**Text post */}
        <input placeholder="What's up chap?" class="postMates" />

        </div>
        
      </div>
      <hr class="elementCenter" />

      {/**Lower section of post box area where you can insert a extra item */}
      <div class="shareBottom">
        <div class="shareOptions">
          {/**Photo*/}
          <div className="shareOption">
            <img className="shareIcon" src={upload} alt="" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
        </div>

        {/**Post to DB button */}
        <button class="shareButton">Share</button>
      </div>
    </div>
  );
}
