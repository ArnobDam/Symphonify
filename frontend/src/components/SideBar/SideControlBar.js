// import spotifyLogo from "../../../../app/assets/images/spotify_white.png"
import { AiOutlineHome } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { BsPlusSquareFill } from 'react-icons/bs';

import { useHistory } from "react-router-dom";
import PlaylistIndexList from '../PlaylistIndexList';
import spotifyLogo from "./spotify_white.png"
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylist } from '../../store/playlists';


const SideControlBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const playlists = useSelector((state) => state.playlists ? Object.values(state.playlists) : []);
    const session = useSelector(state => state.session ? state.session : {});

    let numPlaylistsCurrentUser = 0;

    playlists.forEach((playlist) => {
        if (playlist.creatorId === session.user.id) {
            numPlaylistsCurrentUser++;
        }
    })

    // console.log(numPlaylistsCurrentUser);

    const handleCreatePlaylist = () => {
        // debugger
        dispatch(createPlaylist({
            playlist: {
                "title": `My Playlist #${numPlaylistsCurrentUser + 1}`,
                "creator_id": session.user.id
            }
        }));
        history.push(`/playlists/${playlists.length + 1}`);
    };

    return (
        <nav className="sideBar">
            <div className="logoDiv" onClick={(e) => history.push(`/`)}>
                <img className="logoIcon" src={spotifyLogo} alt='logo'/>
                <p className="logoName">Symphonify</p>
            </div>
            <div className="sidebar-links">
                <div className="home-div" onClick={(e) => history.push(`/`)}>
                    <AiOutlineHome className='home-icon'/>
                    <p className="home-text">Home</p>
                </div>
                <div className="search-div" onClick={(e) => history.push(`/search`)}>
                    <FiSearch className='search-icon'/>
                    <p className="search-text">Search</p>
                </div>
                <div className="create-playlist-div" onClick={handleCreatePlaylist}>
                    <BsPlusSquareFill className='create-playlist-icon'/>
                    <p className="create-playlist-text">Create Playlist</p>
                </div>
            </div>
            <PlaylistIndexList/>
        </nav>
    )
}

export default SideControlBar;