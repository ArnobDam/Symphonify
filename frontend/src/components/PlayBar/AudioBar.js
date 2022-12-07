import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// const AudioPlayer = window.ReactH5AudioPlayer.default;

const AudioBar = () => {
    return (
    <AudioPlayer
        autoPlay
        // src="http://example.com/audio.mp3"
        src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
        onPlay={e => console.log("onPlay")}
        // other props here
    />
    )
};

export default AudioBar;