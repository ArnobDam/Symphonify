
import { useState } from 'react';
import './Track.css'

function Track({ songTitle, artistName }) {

    const [playPauseSymbol, setPlayPauseSymbol] = useState("⏵︎"); //"⏸︎"

    return (
        <div className='track'>
            <button>{playPauseSymbol}</button>
            <div className='track-text'>
                <p>{songTitle}</p>
                <p>{artistName}</p>
            </div>
            <button>•••</button>
        </div>
    )
};

export default Track;