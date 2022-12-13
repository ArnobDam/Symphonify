
import { useState } from 'react';
import AudioBar from '../PlayBar/AudioBar';
import './Track.css'

function Track({ songTitle, artistName, songUrl }) {

    // console.log(songUrl)

    const [playPauseSymbol, setPlayPauseSymbol] = useState("⏵︎"); // pause symbol: "⏸︎"

    // <AudioBar 

    const handleClick = (e) => {
        console.log("track clicked")
        return (<AudioBar trackUrl={songUrl} autoPlayBool={true} />)
    };

    return (
        <div className='track' onClick={handleClick}>
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