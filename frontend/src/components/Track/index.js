import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeCurrentPlaylist, makeCurrentPlaylistAlbum, makeCurrentPlaylistPlaylist } from '../../store/currentPlaylist';
import { setTheCurrentTrack, setCurrentTrack } from '../../store/currentTrack';
import { deletePlaylistSong } from '../../store/playlistSongs';
import AudioBar from '../PlayBar/AudioBar';
import './Track.css'

function Track({ id, songId, songTitle, artistName, songUrl, albumId, playlistId }) {
    //playlistId is a string
    const dispatch = useDispatch();

    const [playPauseSymbol, setPlayPauseSymbol] = useState("⏵︎"); // pause symbol: "⏸︎"

    const [showTrackMenu, setShowTrackMenu] = useState(false);

    const playlistSongs = useSelector(state => state.playlistSongs ? state.playlistSongs : {});
    const playlistSongsArr = Object.values(playlistSongs);

    // const currentPlaylistSongIds = useSelector(state => state.currentPlaylist.songIds ? state.currentPlaylist.songIds : []);
    // const currentTrack = useSelector(state => state.currentTrack ? state.currentTrack : {});

    // useEffect(() => {

    //     if (currentTrack && currentPlaylistSongIds) {
    //         if (songId === currentPlaylistSongIds[currentTrack]) {
    //             setPlayPauseSymbol("⏸︎");
    //         } else {
    //             setPlayPauseSymbol("⏵︎");
    //         }
    //     }

    // }, [songId, currentTrack, currentPlaylistSongIds])

    const handleClick = (e) => {
        // console.log("track clicked")

        dispatch(setCurrentTrack(id))

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

    const handleRemoveTrack = (e) => {
        e.stopPropagation();
        setShowTrackMenu(false);
        // console.log(playlistId, songId)
        // console.log(playlistSongsArr[0])
        let playlistSongId;
        playlistSongsArr.forEach((playlistSong) => {
            // console.log(playlistSong.playlistId, playlistSong.songId)
            if (playlistSong.playlistId === parseInt(playlistId) && playlistSong.songId === songId) {
                playlistSongId = playlistSong.id;
            }
        })
        dispatch(deletePlaylistSong(playlistSongId));
    }

    return (
        <div id={id} className='track' onClick={handleClick}>
            <div className='play-pause-and-text'>
                <button className='play-pause-button'>{playPauseSymbol}</button>
                <div className='track-text'>
                    <p className='song-title'>{songTitle}</p>
                    <p className='artist-name-track'>{artistName}</p>
                </div>
            </div>

            {playlistId && <button className='options-button' onClick={trackOptionsButtonClick}>•••</button>}
            {playlistId && showTrackMenu && ( //playlistId so only works on playlists 
                <ul className='track-options-dropdown'>
                    <li>
                        <button className='remove-track-button' onClick={handleRemoveTrack}>Remove</button>
                    </li>
                </ul>
            )}
        </div>
    )
};

export default Track;