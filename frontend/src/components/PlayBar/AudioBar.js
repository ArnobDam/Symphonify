import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './PlayBar.css';

// const AudioPlayer = window.ReactH5AudioPlayer.default;

const playlist = [
  { src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3' },
  { src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3' },
  { src: 'https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3' },
]

const AudioBar = () => {

    const [currentTrack, setTrackIndex] = useState(0);

    const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };

    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
            currentTrack > 0 ? currentTrack - 1 : playlist.length - 1
        );
    };
  
    const handleEnd = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    }

    return (
    // <AudioPlayer
    //     className='bar'
    //     // autoPlay
    //     showSkipControls
    //     showFilledVolume
    //     src="https://download.samplelib.com/mp3/sample-12s.mp3"
    //     // src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
    //     onPlay={e => console.log("onPlay")}

    //     // other props here
    // />
    <AudioPlayer
        className='bar'
        // autoPlay
        showSkipControls
        src={playlist[currentTrack].src}
        // src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
        // onPlay={e => console.log("onPlay")}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        onEnded={handleEnd}
        showFilledVolume
        // customAdditionalControls={["LOOP"]}
        customAdditionalControls={[]}
        // other props here
    />
    )
};

export default AudioBar;