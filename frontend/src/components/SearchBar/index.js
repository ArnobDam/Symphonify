import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { receiveSearchedAlbums } from '../../store/searchedAlbums';
import './SearchBar.css'

function SearchBar() {

    const dispatch = useDispatch();

    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);

    const [searchValue, setSearchValue] = useState("")

    const [searchedAlbums, setSearchedAlbums] = useState([])

    const mainSearchBarInput = useRef(false);

    useEffect(() => {
        mainSearchBarInput.current.focus();
    }, [])

    const handleChange = (e) => {
        setSearchValue(e.target.value)

        setSearchedAlbums([])
        // console.log(e.target.value)

        if (e.target.value !== "") {
            let counter = 0;
            albums.forEach((album) => {
                if (album.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    album.artist.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    // console.log("hi")
                    // if (!dupAlbums(searchedAlbums, album)) {
                    setSearchedAlbums((searchedAlbums) => [...searchedAlbums, album])
                    // }
                    counter++;

                }
            })
            if (counter === 0) {
                setSearchedAlbums("empty")
            }
        }
        // }
    }

    // useEffect(() => {
    dispatch(receiveSearchedAlbums(searchedAlbums))
    // }, [dispatch])

    return (
        <>
            {/* <i class="fa-magnifying-glass"></i> */}
            <FiSearch className='magnifying-glass' />
            <input className='search'
                type="text"
                placeholder='What do you want to listen to?'
                name=""
                onChange={handleChange}
                value={searchValue}
                ref={mainSearchBarInput}
            />
        </>
    )


};

export default SearchBar;