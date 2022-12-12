import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function AlbumListItem({ album, isHighlighted, setHighlightedBench }) {
    const { title, albumPhotoUrl, artistId } = album;
    const history = useHistory(); 

    // console.log(baseUrl+albumPhotoUrl)

    // const artists = useSelector(state => Object.values(state.artists))
    // console.log(artists)
    // const artist = Artist.find_by(id: artistId);

    return (
        
        <div>
            <div className="list-item-info">
                <img className="albumPhoto" 
                src={`https://symphonify-dev.s3.amazonaws.com/48fqqfpepeixxxfyn7i4h1xqdyrg`} 
                alt='Album'/>
                <p className="albumTitle">{title}</p>
                {/* <p>{artistId.name}</p> */}
                <p className="artistName">Logic</p>
            </div>
        </div>
    )
};

export default AlbumListItem;