import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchPlaylist, deletePlaylist } from '../../store/playlists';
import Track from '../Track';
import './PlaylistShowPage.css'
import cover from './new_playlist_cover.PNG'

function PlaylistShowPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { playlistId } = useParams();

    const playlist = useSelector(state => state.playlists[playlistId] ? state.playlists[playlistId] : {})
    // const session = useSelector(state => state.session ? state.session : {});

    const [username, setUsername] = useState("");

    const { title } = playlist;

    const [songsArr, setSongsArr] = useState([]);
    // console.log(songsArr)
    const [songTitlesArr, setSongTitlesArr] = useState([]);

    const [showOptionsMenu, setShowOptionsMenu] = useState(false);

    useEffect(() => {
        dispatch(fetchPlaylist(playlistId)).then(res => {
            // console.log(res)
            // console.log("test")
            let data = res.payload.playlist;
            if (data.creator.username) {
                setUsername(data.creator.username);
            }
            if (data.songs) {
                setSongsArr([]);
                setSongTitlesArr([]);
                for (const [key, value] of Object.entries(data.songs)) {
                    if (!songTitlesArr.includes(value.title)) {
                        setSongsArr((songsArr) => [...songsArr, value])
                        setSongTitlesArr((songTitlesArr) => [...songTitlesArr, value.title])
                    }
                }
            } else {
                setSongsArr([]);
                setSongTitlesArr([]);
            }
        });
    }, [playlistId, dispatch]);

    useEffect(() => {
        if (!showOptionsMenu) return;

        const closeOptionsMenu = () => {
            setShowOptionsMenu(false);
        };

        document.addEventListener('click', closeOptionsMenu);

        return () => document.removeEventListener("click", closeOptionsMenu);
    }, [showOptionsMenu]);

    // console.log(username)
    // console.log(songTitlesArr);

    if (!playlist) {
        return null;
    }

    const optionsButtonClick = (e) => {
        openMenu();
    }

    const openMenu = () => {
        if (showOptionsMenu) return;
        setShowOptionsMenu(true);
    };

    const handleDeletePlaylist = (e) => {
        e.preventDefault();
        dispatch(deletePlaylist(playlistId));
        history.push(`/`);
    }

    return (
        <div className='playlist-show-page'>
            <div className='playlist-details'>
                <img className="playlist-photo"
                    src={cover}
                    alt='Playlist Cover' />

                <div className='playlist-text'>
                    <p className='playlist-title'>{title}</p>
                    <div className='name-and-year'>
                        <p className='creator-name'>{username}</p>
                        <p className='bullet-point'>•</p>
                        <p className='num-songs'>{songsArr.length} songs</p>
                    </div>
                </div>

            </div>
            <button className='playlist-options-button' onClick={optionsButtonClick}>•••</button>
            {showOptionsMenu && (
                <ul className="playlist-options-dropdown">
                    <li>
                        <button className="delete-playlist-button" onClick={handleDeletePlaylist}>Delete</button>
                    </li>
                </ul>
            )}
            <div className='playlist-songs'>
                <div className='hashtag-and-title'>
                    <p className='hashtag'>#</p>
                    <p className='title-text'>TITLE</p>
                </div>
                {/* {console.log(songsArr)} */}
                {songsArr.map((song, idx) => {
                    // {console.log(song.title)}
                    // return (<p>{song.title}</p>)
                    // {console.log(idx)}
                    return (<Track
                        key={idx}
                        id={idx}
                        songTitle={song.title}
                        artistName={song.name}
                        songUrl={song.songUrl}
                        playlistId={playlistId} />) // THIS LINE SUPER IMPORTANT
                })}
            </div>


        </div>
    )
};

export default PlaylistShowPage;

