import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPlaylistSong } from '../../store/playlistSongs';
import './SearchedTrack.css';

function SearchedTrack({ id, songTitle, artistName, playlistId }) {
    //playlistId is a string
    const dispatch = useDispatch();
    const history = useHistory();
    

    const playlistSongs = useSelector(state => state.playlistSongs ? state.playlistSongs : {});
    const playlistSongsArr = Object.values(playlistSongs)

    const handleAddSongClick = () => {
        let alreadyAdded = false;
        
        playlistSongsArr.forEach((playlistSong) => {
            if (playlistSong.playlistId === parseInt(playlistId) && playlistSong.songId === id) {
                alreadyAdded = true
            }
        })
        if (!alreadyAdded) { //cannot add duplicates
            // console.log("test")
            // debugger
            dispatch(createPlaylistSong({
                "playlist_id": playlistId,
                "song_id": id
            }));
        }
        
        // return (history.push(`/playlists/${playlistId}`));
    }

    return (
        
        <div className='searched-track'>
                <div className='searched-track-text'>
                    <p className='searched-track-song-title'>{songTitle}</p>
                    <p className='searched-track-artist-name'>{artistName}</p>
                </div>
            <button className='add-song-button' onClick={handleAddSongClick}>Add</button>
        </div>
    )
};

export default SearchedTrack;