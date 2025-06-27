import Avatar from '@mui/material/Avatar';
import "./VideoCard.css";
function VideoCard({image,title,channelName,views,timeStamp,avatarImage}){

    return(
        <div className="video_card">

            <img src={image} className="thumbnail"/>

            <div className="video_info">

                <Avatar className="avatar-image" src={avatarImage}/>

                <div className="video_title">
                    <h3>{title}</h3>
                    <p>{channelName}</p>

                    <div className="views">
                        <p>{views} views · {timeStamp} ago </p>
                    </div>
                </div>
                

            </div>
        </div>
    );

}

export default VideoCard;