import React from "react";
import { useHistory } from "react-router-dom";

function AlbumListItem({ album, isHighlighted, setHighlightedBench }) {
    const { title, albumPhotoUrl, artistId } = album;
    const history = useHistory(); 

    // console.log(baseUrl+albumPhotoUrl)

    return (
        
        <div>
            <div className="list-item-info">
                <img src={`https://symphonify-dev.s3.amazonaws.com/48fqqfpepeixxxfyn7i4h1xqdyrg`} alt='Album'/>
                <h5>{title}</h5>
            </div>
        </div>
    )
};

export default AlbumListItem;