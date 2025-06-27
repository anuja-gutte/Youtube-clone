import "./LeftMenu.css";
import SidebarRow from "./SidebarRow";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function LeftMenu(){
    return(
        <div className="sidebar">
           <SidebarRow selected Icon={HomeIcon} title = "Home"/>
            <SidebarRow Icon={WhatshotIcon} title = "Trending"/>
             <SidebarRow Icon={SubscriptionsIcon} title = "Subscription"/>
             <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title = "Library"/>
            <SidebarRow Icon={HistoryIcon} title = "History"/>
            <SidebarRow Icon={OndemandVideoIcon} title = "Your Videos"/>
            <SidebarRow Icon={WatchLaterIcon} title = "Watch Later"/>
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title = "Liked Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title = "Show More"/>
            <hr/>
        </div>
    );
}

export default LeftMenu;