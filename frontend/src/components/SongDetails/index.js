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
    // console.log(firstSongId)

    const songTitle = useSelector((state) => state.currentPlaylist.songs ?
    state.currentPlaylist.songs[firstSongId + currentTrackId].title :
    "")

    const artistName = useSelector((state) => state.currentPlaylist.artist ?
    state.currentPlaylist.artist.name :
    "")




    return (
        <div className='song-details-container'>
            <img className='details-album-photo' src={albumPhotoUrl}></img>
            <div className='details-song-title-and-artist-name'>
                <p className='details-song-title'>{songTitle}</p>
                <p className='details-artist-name'>{artistName}</p>
            </div>
            
        </div>
    )
};

export default SongDetails;