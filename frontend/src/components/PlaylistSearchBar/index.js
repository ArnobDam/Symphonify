import { useEffect, useState } from 'react';
// import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { receiveSearchedSongs } from '../../store/searchedSongs';
import { fetchSongs } from '../../store/songs';
import './PlaylistSearchBar.css'

function PlaylistSearchBar() {
    const dispatch = useDispatch();

    const songs = useSelector(state => state.songs ? Object.values(state.songs) : []);

    const [songSearchValue, setSongSearchValue] = useState("");

    const [searchedSongs, setSearchedSongs] = useState([]);


    useEffect(() => {
        dispatch(fetchSongs());
    }, [dispatch])

    const handleChange = (e) => {
        setSongSearchValue(e.target.value)

        setSearchedSongs([]);

        if (e.target.value !== "") {
            
            songs.forEach((song) => {
                if (song.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
                song.artist.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    setSearchedSongs((searchedSongs) => [...searchedSongs, song])
                }
            })
        }
    }

    dispatch(receiveSearchedSongs(searchedSongs));
    // console.log(songSearchValue)

    return (
        <>
            {/* <FiSearch className='playlist-search-magnifying-glass' /> */}
            <input className='playlist-search'
                type="text"
                placeholder='Search for songs'
                name=""
                onChange={handleChange}
                value={songSearchValue}
                // ref={mainSearchBarInput}
            />
        </>
    )
};

export default PlaylistSearchBar;