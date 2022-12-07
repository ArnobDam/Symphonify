import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './PlayBar.css';

// const AudioPlayer = window.ReactH5AudioPlayer.default;

const AudioBar = () => {
    return (
    <AudioPlayer
        className='bar'
        autoPlay
        src="https://download.samplelib.com/mp3/sample-12s.mp3"
        // src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
        onPlay={e => console.log("onPlay")}

        // other props here
    />
    )
};

export default AudioBar;