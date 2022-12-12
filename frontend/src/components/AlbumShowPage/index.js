import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAlbum } from "../../store/albums";
import './AlbumShowPage.css'

import { useDispatch, useSelector } from 'react-redux';
import csrfFetch from '../../store/csrf';

import { Redirect } from 'react-router-dom';

function AlbumShowPage() {
    const dispatch = useDispatch();
    const { albumId } = useParams();
    // console.log(albumId)


    const album = useSelector(state => state.albums[albumId] ? state.albums[albumId] : {})

    // console.log(album)

    const [artistName, setArtistName] = useState("");

    const { artistId, title, year, albumPhotoUrl } = album;
    // console.log(artistId)

    useEffect(() => {
        // console.log("hi2")
        dispatch(fetchAlbum(albumId))

        if (artistId) {
            csrfFetch(`/api/artists/${artistId}`)
                .then(res => res.json())
                .then(data => setArtistName(data.name))
        }
    }, [artistId, albumId, dispatch])


    // console.log(album)
    // if (album.songs) {
    //     console.log("hi")
    //     album.songs.forEach((song) => {
    //         console.log(song)
    //     })
    // }


    if (!album) {
        return null;
    }

    return (
        <div className='album-show-page'>
            <div className='album-details'>
                <img className="album-photo"
                    src={`https://symphonify-dev.s3.amazonaws.com/48fqqfpepeixxxfyn7i4h1xqdyrg`}
                    alt='Album' />

                <div className='album-text'>
                    <p className='album-title'>{title}</p>
                    <div className='name-and-year'>
                        <p className='artist-name'>{artistName}</p>
                        <p className='bullet-point'>•</p>
                        <p className='year'>{year}</p>
                    </div>
                </div>

            </div>
            <div className='album-songs'>

            </div>


        </div>
    )
};

export default AlbumShowPage;