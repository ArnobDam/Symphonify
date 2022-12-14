
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeCurrentPlaylist } from '../../store/currentPlaylist';
import { setTheCurrentTrack, setCurrentTrack } from '../../store/currentTrack';
import AudioBar from '../PlayBar/AudioBar';
import './Track.css'

function Track({ id, songTitle, artistName, songUrl, albumId }) {
    const dispatch = useDispatch();
    // console.log(songUrl)

    const [playPauseSymbol, setPlayPauseSymbol] = useState("⏵︎"); // pause symbol: "⏸︎"

    // <AudioBar 

    const handleClick = (e) => {
        console.log("track clicked")
        console.log(id)
        // console.log(songTitle);
        dispatch(setCurrentTrack(id))
        // debugger;
        return dispatch(makeCurrentPlaylist(albumId))
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

            <button className='options-button'>•••</button>
        </div>
    )
};

export default Track;