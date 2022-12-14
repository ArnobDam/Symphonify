import { useDispatch, useSelector } from 'react-redux';
import './SongDetails.css'

function SongDetails() {
    const dispatch = useDispatch();

    const currentTrackId = useSelector((state) => state.currentTrack)

    const albumPhotoUrl = useSelector((state) => state.currentPlaylist.albumPhotoUrl 
    ? state.currentPlaylist.albumPhotoUrl :
    "")

    const firstSongId = useSelector((state) => state.currentPlaylist.songIds ? 
    state.currentPlaylist.songIds[0] :
    NaN)
    console.log(firstSongId)

    const songTitle = useSelector((state) => state.currentPlaylist.songs ?
    state.currentPlaylist.songs[firstSongId + currentTrackId].title :
    "")

    const artistName = useSelector((state) => state.currentPlaylist.artist ?
    state.currentPlaylist.artist.name :
    "")




    return (
        <div className="song-details-container">
            <img src={albumPhotoUrl}></img>
            <p>{songTitle}</p>
            <p>{artistName}</p>
        </div>
    )
};

export default SongDetails;