import React, { useEffect, useState } from "react";
import AlbumList from "./AlbumList";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { fetchAlbums } from "../../store/albums";
import './AlbumIndexPage.css'

function AlbumIndexPage() {
    const dispatch = useDispatch();
    // const history = useHistory(); 
    const albums = useSelector(state => state.albums ? Object.values(state.albums) : []);

    const [highlightedAlbum, setHighlightedAlbum] = useState(null);
    
    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch]);

    return (
        <div className="albumIndexPage">
            {/* <p>Albums</p> */}
            <AlbumList
                albums={albums}
                highlightedAlbum={highlightedAlbum}
                setHighlightedAlbum={setHighlightedAlbum}
            />
        </div>
    )

};

export default AlbumIndexPage;