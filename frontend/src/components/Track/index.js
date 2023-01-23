
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeCurrentPlaylist, makeCurrentPlaylistAlbum, makeCurrentPlaylistPlaylist } from '../../store/currentPlaylist';
import { setTheCurrentTrack, setCurrentTrack } from '../../store/currentTrack';
import AudioBar from '../PlayBar/AudioBar';
import './Track.css'

function Track({ id, songTitle, artistName, songUrl, albumId, playlistId }) {
    const dispatch = useDispatch();
    // console.log(songUrl)

    const [playPauseSymbol, setPlayPauseSymbol] = useState("⏵︎"); // pause symbol: "⏸︎"

    const [showTrackMenu, setShowTrackMenu] = useState(false);
    // <AudioBar 

    const handleClick = (e) => {
        // console.log("track clicked")
        // console.log(id)
        // console.log(songTitle);
        dispatch(setCurrentTrack(id))
        // debugger;
        if (albumId) {
            return dispatch(makeCurrentPlaylistAlbum(albumId));
        } else {
            return dispatch(makeCurrentPlaylistPlaylist(playlistId));
        }
        
    };

    useEffect(() => {
        if (!showTrackMenu) return;

        const closeTrackMenu = () => {
            setShowTrackMenu(false)
        }

        document.addEventListener('click', closeTrackMenu);

        return (() => document.removeEventListener('click', closeTrackMenu));
    }, [showTrackMenu]);

    const trackOptionsButtonClick = (e) => {
        e.stopPropagation();
        openTrackMenu();
    }

    const openTrackMenu = () => {
        if (showTrackMenu) return;
        setShowTrackMenu(true);
    };

    return (
        <div id={id} className='track' onClick={handleClick}>
            <div className='play-pause-and-text'>
                <button className='play-pause-button'>{playPauseSymbol}</button>
                <div className='track-text'>
                    <p className='song-title'>{songTitle}</p>
                    <p className='artist-name-track'>{artistName}</p>
                </div>
            </div>

            <button className='options-button' onClick={trackOptionsButtonClick}>•••</button>
            {playlistId && showTrackMenu && ( //playlistId so only works on playlists 
                <ul className='track-options-dropdown'>
                    <li>
                        <button className='remove-track-button'>Remove</button>
                    </li>
                </ul>
            )}
        </div>
    )
};

export default Track;