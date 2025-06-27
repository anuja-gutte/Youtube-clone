import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideocallIcon from '@mui/icons-material/VideoCallRounded';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header(){
    
    const [inputSearch,setInputSearch] = useState("");  
     const navigate = useNavigate();

      const handleSearch = () => {
    if (inputSearch.trim()) {
      navigate(`/search/${inputSearch}`);
    }
  };
    return(
        <div className="header">

            <div className="header_logo">
                 <MenuIcon/>
            <img className="header_logo"
            src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'/>
            </div>

            <div className="header_input">
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} className="search" type="text" />

            {/* <Link to={`/search/${inputSearch}`}>
             <SearchIcon/>
            </Link> */}

            <SearchIcon onClick={handleSearch}  style={{cursor:'pointer'}}/>
           
            
            </div>
           

           <div className="header_right">
            <VideocallIcon  className="header_icons"/>
            <AppsIcon className="header_icons"/>
            <NotificationsIcon className="header_icons"/>
            <Avatar/>
           </div>

           

        </div>
    );
}

export default Header;