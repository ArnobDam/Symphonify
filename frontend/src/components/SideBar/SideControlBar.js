// import spotifyLogo from "../../../../app/assets/images/spotify_white.png"
import spotifyLogo from "./spotify_white.png"
const SideControlBar = () => {
    return (
        <nav className="sideBar">
            <div className="logoDiv">
                <img className="logoIcon" src={spotifyLogo} />
                <p className="logoName">Symphonify</p>
            </div>
        </nav>
    )
}

export default SideControlBar;