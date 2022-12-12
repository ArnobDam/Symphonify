import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAlbum } from "../../store/albums";
import './AlbumShowPage.css'

import { useDispatch, useSelector } from 'react-redux';
import csrfFetch from '../../store/csrf';

function AlbumShowPage() {
    const dispatch = useDispatch();
    const { albumId } = useParams();

    const album = useSelector(state => state.albums[albumId])

    const [artistName, setArtistName] = useState("");

    useEffect(() => {
        csrfFetch(`/api/artists/${artistId}`)
        .then(res => res.json())
        .then(data => setArtistName(data.name))
    },[])

    useEffect(() => {
        dispatch(fetchAlbum(albumId));
    }, [albumId, dispatch])


    if (!album) {
        return null;
    }

    const { artistId, title, year, albumPhotoUrl } = album;

    
    


    return (
        <div className='album-show-page'>
            <div className='album-details'>
                <img className="album-photo" 
                src={`https://symphonify-dev.s3.amazonaws.com/48fqqfpepeixxxfyn7i4h1xqdyrg`} 
                alt='Album'/>

                <div className='album-text'>
                    <p>{title}</p>
                    <p>{artistName}</p>
                    <p>{year}</p>
                </div>
                
            </div>
            <div className='albums-songs'>

            </div>
            
            
        </div>
    )
};

export default AlbumShowPage;