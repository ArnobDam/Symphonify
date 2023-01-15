import { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAlbum, fetchAlbums } from '../../store/albums';
import { makeCurrentPlaylist } from '../../store/currentPlaylist';
import { setTheCurrentTrack, setCurrentTrack } from '../../store/currentTrack';
import './PlayBar.css';

// const AudioPlayer = window.ReactH5AudioPlayer.default;

const playlist = [
    { src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3' },
    { src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3' },
    { src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3' },
]

const AudioBar = ({ trackUrl, autoPlayBool }) => {

    const dispatch = useDispatch();
    const { albumId } = useParams();

    const currentTrackId = useSelector((state) => state.currentTrack)

    const currentPlaylistArr = useSelector(({ currentPlaylist }) => {
        return currentPlaylist.id ? Object.values(currentPlaylist.songs) : []
    });

    const handleClickNext = () => {
        const trackId = currentTrackId < currentPlaylistArr.length - 1 ? currentTrackId + 1 : 0;
        dispatch(setCurrentTrack(trackId));
    };

    const handleClickPrevious = () => {
        const trackId = currentTrackId > 0 ? currentTrackId - 1 : currentPlaylistArr.length - 1;
        dispatch(setCurrentTrack(trackId));
    };

    return (
        <AudioPlayer
            className='bar'
            // autoPlay
            showSkipControls
            // src={playlist[currentTrack].src}
            src={currentPlaylistArr[currentTrackId]?.songUrl}
            // src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
            // onPlay={handleOnPlay}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrevious}
            onEnded={handleClickNext}
            showFilledVolume
            // customAdditionalControls={["LOOP"]}
            customAdditionalControls={[]}
        />
    )
};

export default AudioBar;