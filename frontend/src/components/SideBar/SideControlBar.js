// import spotifyLogo from "../../../../app/assets/images/spotify_white.png"
import { AiOutlineHome } from 'react-icons/ai';

import { useHistory } from "react-router-dom";
import spotifyLogo from "./spotify_white.png"


const SideControlBar = () => {
    const history = useHistory();

    return (
        <nav className="sideBar">
            <div className="logoDiv" onClick={(e) => history.push(`/`)}>
                <img className="logoIcon" src={spotifyLogo} />
                <p className="logoName">Symphonify</p>
            </div>
            <div className="sidebar-links" onClick={(e) => history.push(`/`)}>
                <div className="home-div">
                    <AiOutlineHome className='home-icon'/>
                    <p className="home-text">Home</p>
                </div>
            </div>
        </nav>
    )
}

export default SideControlBar;