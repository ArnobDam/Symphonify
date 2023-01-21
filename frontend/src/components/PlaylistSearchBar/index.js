import { useEffect, useState } from 'react';
// import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { fetchSongs } from '../../store/songs';
import './PlaylistSearchBar.css'

function PlaylistSearchBar() {
    const dispatch = useDispatch();

    const [songSearchValue, setSongSearchValue] = useState("");

    const handleChange = (e) => {
        setSongSearchValue(e.target.value)
    }

    useEffect(() => {
        dispatch(fetchSongs());
    }, [dispatch])

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