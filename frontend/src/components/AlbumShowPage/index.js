import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAlbum } from "../../store/albums";
import './AlbumShowPage.css'

import { useDispatch, useSelector } from 'react-redux';
function AlbumShowPage() {
    const dispatch = useDispatch();
    const { albumId } = useParams();

    const album = useSelector(state => state.albums[albumId])

    useEffect(() => {
        dispatch(fetchAlbum(albumId));
    }, [albumId, dispatch])


    if (!album) {
        return null;
    }

    const { artist_id, title, year, album_photo_url } = album;


    return (
        <div className='album-show-page'>
            <h1>{title}</h1>
        </div>
    )
};

export default AlbumShowPage;