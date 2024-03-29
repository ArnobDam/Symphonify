import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAlbum } from "../../store/albums";
import './AlbumShowPage.css'

import { useDispatch, useSelector } from 'react-redux';
import csrfFetch from '../../store/csrf';

import { Redirect } from 'react-router-dom';
import Track from '../Track';

function AlbumShowPage() {
    const dispatch = useDispatch();
    const { albumId } = useParams();
    // console.log(albumId)


    const album = useSelector(state => state.albums[albumId] ? state.albums[albumId] : {})

    // console.log(album)

    const [artistName, setArtistName] = useState("");

    const { artistId, title, year, albumPhotoUrl, songIds } = album;
    // console.log(songIds)

    const [songsArr, setSongsArr] = useState([]);
    const [songTitlesArr, setSongTitlesArr] = useState([]);

    useEffect(() => {
        // console.log("hi2")
        dispatch(fetchAlbum(albumId)).then(res => {

            // console.log(res.payload.album)

            let data = res.payload.album;

            if (data.artist.name) {
                setArtistName(data.artist.name)
            }

            if (data.songs) {
                // console.log(data.songs)
                for (const [key, value] of Object.entries(data.songs)) {
                    // console.log(value.title)
                    // console.log(songTitlesArr)
                    // console.log(songsArr)
                    // console.log(songTitlesArr.includes(value.title))
                    if (!songTitlesArr.includes(value.title)) {
                        setSongsArr((songsArr) => [...songsArr, value])
                        setSongTitlesArr((songTitlesArr) => [...songTitlesArr, value.title])
                    }
                }

            }
        })
    }, [albumId, dispatch])


    if (!album) {
        return null;
    }

    // console.log(songsArr)
    return (
        <div className='album-show-page'>
            <div className='album-details'>
                <img className="album-photo"
                    src={albumPhotoUrl}
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
                <div className='hashtag-and-title'>
                    <p className='hashtag'>#</p>
                    <p className='title-text'>TITLE</p>
                </div>
                {/* {console.log(songsArr)} */}
                {songsArr.map((song, idx) => {
                    // {console.log(song.title)}
                    // return (<p>{song.title}</p>)
                    // {console.log(idx)}
                    return (<Track
                        key={idx}
                        id={idx} 
                        songTitle={song.title} 
                        artistName={artistName} 
                        songUrl={song.songUrl}
                        albumId={albumId} />)
                })}
            </div>


        </div>
    )
};

export default AlbumShowPage;