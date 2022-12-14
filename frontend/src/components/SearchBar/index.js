import './SearchBar.css'
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { receiveSearchedAlbums } from '../../store/searchedAlbums';



function SearchBar() {

    const dispatch = useDispatch();

    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);

    const [searchValue, setSearchValue] = useState("")

    const [searchedAlbums, setSearchedAlbums] = useState([])
    // console.log(albums)

    const handleChange = (e) => {
        setSearchValue(e.target.value)

        setSearchedAlbums([])
        // console.log(e.target.value)

        // if (e.target.value === "") {
        //     setSearchedAlbums((searchedAlbums) => [...searchedAlbums, {title: 'none'}])
        // } else {

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

    // console.log(searchedAlbums)

    // useEffect(() => {
    dispatch(receiveSearchedAlbums(searchedAlbums))
    // }, [dispatch])

    // const dupAlbums = (searchedAlbums, album) => {
    //     searchedAlbums.forEach((searchedAlbum) => {

    //         if (JSON.stringify(searchedAlbum) === JSON.stringify(album)) {
    //             return true;
    //         }
    //     })

    //     return false;
    // }

    // console.log(searchedAlbums)

    // console.log(searchValue)

    return (
        <>
            {/* <i class="fa-magnifying-glass"></i> */}
            <FiSearch className='magnifying-glass' />
            <input type="text"
                className='search'
                placeholder='What do you want to listen to?'
                name=""
                onChange={handleChange}
                value={searchValue}
            />
        </>
    )


};

export default SearchBar;