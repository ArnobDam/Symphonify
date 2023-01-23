import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchPlaylist, deletePlaylist, updatePlaylist } from '../../store/playlists';
import Track from '../Track';
import './PlaylistShowPage.css'
import cover from './new_playlist_cover.PNG'
import PlaylistSearchBar from '../PlaylistSearchBar';
import SearchedTrack from '../SearchedTrack';
import { fetchPlaylistSongs } from '../../store/playlistSongs';
// import { FiSearch } from 'react-icons/fi';

function PlaylistShowPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { playlistId } = useParams();

    const editInput = useRef(false);

    const playlist = useSelector(state => state.playlists[playlistId] ? state.playlists[playlistId] : null)
    const session = useSelector(state => state.session ? state.session : {});
    const searchedSongs = useSelector(state => state.searchedSongs ? state.searchedSongs : []);
    const playlistSongs = useSelector(state => state.playlistSongs ? state.playlistSongs : {});

    const [username, setUsername] = useState("");

    // const { title } = playlist;
    // console.log(title)
    const [playlistTitle, setPlaylistTitle] = useState("")
    // console.log(playlistTitle)

    const [songsArr, setSongsArr] = useState([]);
    const [songsArrEmpty, setSongsArrEmpty] = useState(true);
    // console.log(songsArr)
    const [songTitlesArr, setSongTitlesArr] = useState([]);

    const [showOptionsMenu, setShowOptionsMenu] = useState(false);

    useEffect(() => {
        // setPlaylistTitle(title)
        dispatch(fetchPlaylist(playlistId)).then(res => {
            // console.log(res)
            // console.log("test")
            let data = res.payload.playlist;
            if (data.creator.username) {
                setPlaylistTitle(data.title);
                setUsername(data.creator.username);
            }
            if (data.songs) {
                // console.log(data.songs)
                // debugger
                setSongsArrEmpty(false);
                setSongsArr([]);
                setSongTitlesArr([]);
                // console.log(songTitlesArr)
                for (const [key, value] of Object.entries(data.songs)) {
                    // if (!songTitlesArr.includes(value.title)) {
                        setSongsArr((songsArr) => [...songsArr, value])
                        setSongTitlesArr((songTitlesArr) => [...songTitlesArr, value.title])
                    // }
                }
            } else {
                setSongsArrEmpty(true);
                setSongsArr([]);
                setSongTitlesArr([]);
            }
        });
    }, [playlistId, dispatch, playlistSongs]);

    // useEffect(() => {
    //     setPlaylistTitle(playlist.title)
    // }, [playlist.title])

    useEffect(() => {
        dispatch(fetchPlaylistSongs());
    },[]);

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

    const handleTitleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePlaylist({
            "id": playlist.id,
            "title": playlistTitle,
            "creator_id": session.user.id
        }))
        editInput.current.blur();
        return (history.push(`/playlists/${playlist.id}`));
    }

    const SearchedSongsMapping = () => {
        let searchedSongTitles = [];
        if (Array.isArray(searchedSongs)) {
            searchedSongTitles = searchedSongs.map((song, idx) => {
                // console.log("test")
                return (<SearchedTrack
                key={idx}
                id={song.id}
                songTitle={song.title}
                artistName={song.artist.name}
                playlistId={playlistId}
                />)
                // return (song.title);
            })
        }
        return searchedSongTitles;
    }

    // console.log(songsArr);

    return (
        <div className='playlist-show-page'>
            <div className='playlist-details'>
                <img className="playlist-photo"
                    src={cover}
                    alt='Playlist Cover' />

                <div className='playlist-text'>

                    <form onSubmit={handleTitleSubmit}>
                        <p className='playlist-title'>
                            <input
                                className='playlist-title-input'
                                type='text'
                                value={playlistTitle}
                                onChange={(e) => setPlaylistTitle(e.target.value)}
                                onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
                                ref={editInput}
                            />
                        </p>
                    </form>

                    <div className='name-and-year'>
                        <p className='creator-name'>{username}</p>
                        {!songsArrEmpty && <p className='bullet-point'>•</p>}
                        {!songsArrEmpty && <p className='num-songs'>{songsArr.length} songs</p>}
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
            <div className='playlist-search-container'>
                <p className='playlist-search-header'>Let's find something for your playlist</p>
                <div className='playlist-search-bar-container'>
                    {/* <FiSearch className='playlist-search-magnifying-glass' /> */}
                    <PlaylistSearchBar/>
                </div>
                {/* {searchedSongs.map((song) => {
                    return (song.title);
                })} */}
                <div className='searched-songs-container'>
                    <SearchedSongsMapping/>
                </div>
                
            </div>

        </div>
    )
};

export default PlaylistShowPage;

