import { useDispatch } from 'react-redux';
import './SearchedTrack.css';

function SearchedTrack({ songTitle, artistName, playlistId }) {
    const dispatch = useDispatch();

    return (
        <div className='searched-track'>
                <div className='searched-track-text'>
                    <p className='searched-track-song-title'>{songTitle}</p>
                    <p className='searched-track-artist-name'>{artistName}</p>
                </div>
            <button className='add-song-button'>Add</button>
        </div>
    )
};

export default SearchedTrack;