import React, { useEffect, useState } from "react";
import AlbumList from "./AlbumList";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAlbums } from "../../store/albums";

function AlbumIndexPage() {
    const dispatch = useDispatch();
    const history = useHistory(); 
    const albums = useSelector(state => Object.values(state.albums));

    const [highlightedAlbum, setHighlightedAlbum] = useState(null);
    
    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch]);

    return (
        <div>
            <h1>Albums</h1>
            <AlbumList
                albums={albums}
                highlightedAlbum={highlightedAlbum}
                setHighlightedAlbum={setHighlightedAlbum}
            />
        </div>
    )

};

export default AlbumIndexPage;