
import { useState } from 'react';
import './Track.css'

function Track({ songTitle, artistName }) {

    const [playPauseSymbol, setPlayPauseSymbol] = useState("⏵︎"); //"⏸︎"

    return (
        <div className='track'>
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