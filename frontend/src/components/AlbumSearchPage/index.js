import React, { useEffect, useState } from "react";
import AlbumList from "./AlbumList";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { fetchAlbums } from "../../store/albums";
import './AlbumSearchPage.css'

let noSearchResults = false;

function AlbumSearchPage() {
    const dispatch = useDispatch();
    // const history = useHistory(); 
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    const searchedAlbums = useSelector(state => state.searchedAlbums ? state.searchedAlbums : [])

    // console.log(searchedAlbums)

    // const

    

    const renderedAlbums = () => {
        if (searchedAlbums !== "empty") {
            noSearchResults = false;
            if (JSON.stringify(searchedAlbums) === '{}' || searchedAlbums.length === 0) {
                return albums;
            } else {
                // console.log(searchedAlbums)
                return searchedAlbums;
            }
        } else {
            noSearchResults = true;
            return [];
        }
    }

    // console.log(renderedAlbums())

    const [highlightedAlbum, setHighlightedAlbum] = useState(null);
    
    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch]);

    const handleNoSearchResults = () => {
        if (noSearchResults) {
            return (

                <div className="no-search-results">
                    <p className="oops">Oops! Your search returned no results.</p>
                    {/* <p className="try-searching-again">Try searching again for a different album or artist.</p> */}
                </div>

                
            )
        }
    }

    // console.log(noSearchResults)

    return (
        <div className="albumIndexPage">
            {/* <p>Albums</p> */}
            {/* {handleNoSearchResults()} */}
            <AlbumList
                albums={renderedAlbums()}
                // albums={searchedAlbums}
                // albums={albums}
                highlightedAlbum={highlightedAlbum}
                setHighlightedAlbum={setHighlightedAlbum}
            />
            
        </div>
    )

};

export default AlbumSearchPage;