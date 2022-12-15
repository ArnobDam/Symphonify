import React, { useEffect, useState } from "react";
import AlbumList from "./AlbumList";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAlbums } from "../../store/albums";
import './AlbumSearchPage.css'

function AlbumSearchPage() {
    const dispatch = useDispatch();
    const history = useHistory(); 
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);
    const searchedAlbums = useSelector(state => state.searchedAlbums)

    // console.log(searchedAlbums)

    const renderedAlbums = () => {
        if (searchedAlbums.length === 0) {
            return albums;
        } else {
            return searchedAlbums;
        }
    }

    console.log(renderedAlbums())

    const [highlightedAlbum, setHighlightedAlbum] = useState(null);
    
    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch]);

    return (
        <div className="albumIndexPage">
            {/* <p>Albums</p> */}
            <AlbumList
                albums={renderedAlbums()}
                highlightedAlbum={highlightedAlbum}
                setHighlightedAlbum={setHighlightedAlbum}
            />
        </div>
    )

};

export default AlbumSearchPage;