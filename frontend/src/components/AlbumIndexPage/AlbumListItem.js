import React from "react";
import { useHistory } from "react-router-dom";

function AlbumListItem({ album, isHighlighted, setHighlightedBench }) {
    const { title, albumPhotoUrl, artistId } = album;
    const history = useHistory(); 

    return (
        <div>
            
        </div>
    )
};

export default AlbumListItem;