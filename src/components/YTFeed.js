import { useState , useEffect } from "react";
import VideoCard from "./VideoCard";
import "./YTFeed.css";
const API_KEY ="AIzaSyDuGtEkXyQM8a-CfHXZvtAKyUcbN7eaGAI";


function YTFeed({searchTerm}){

    const[videos,setVideos] = useState([]);
    const[loading,setLoading] = useState(true);

    useEffect(() => {
        fetchVideos();
    },[searchTerm]);


    const fetchVideos = async() => {
        try{
            const response = await fetch( `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=20&key=${API_KEY}`);

            const data = await response.json();
            setVideos(data.items);
            console.log(data);
            setLoading(false);
        }
        catch(error){
            console.error("failed to fetch: ",error);
            setLoading(false);
        }
        
    };


    return(
        <div className="video_feed">

            {videos.map((video) => (
                <VideoCard 
                key={video.id.videId}
                image={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                channelName={video.snippet.channelTitle}
                views={"100K"} 
                timeStamp={"2 days"}
                avatarImage={"https://yt3.ggpht.com/yti/" + video.snippet.channelId}
                />
            ))}

        </div>
    );
}

export default YTFeed;