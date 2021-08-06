import YourPost from "../PostCode/postModular"
import LiveFeed from "../PostFeed/postFeed"
import "./feed.css"

export default function FeedList(){
    return (
        <div className="feed">
            <div className="feedWrapper"></div>
            {/**your post */}
                <YourPost/>
                
                {/**your feed wall */}
                <LiveFeed/>
                <LiveFeed/>
                <LiveFeed/>
                <LiveFeed/>
                <LiveFeed/>
                <LiveFeed/>
                <LiveFeed/>
                <LiveFeed/>
        </div>
    )
}