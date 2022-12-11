import React from "react";
import { useHistory } from "react-router-dom";

function AlbumListItem({ album, isHighlighted, setHighlightedBench }) {
    const { title, albumPhotoUrl, artistId } = album;
    const history = useHistory(); 

    return (
        <div>
            <div className="list-item-info">
                {albumPhotoUrl && <img src={albumPhotoUrl} alt='Album'/>}
                <h5>{album.title}</h5>
            </div>
        </div>
    )
};

export default AlbumListItem;