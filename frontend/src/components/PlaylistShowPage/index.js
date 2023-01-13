import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './PlaylistShowPage.css'

function PlaylistShowPage() {
    const dispatch = useDispatch();
    const { playlistId } = useParams();

    // const playlist = useSelector(state => state.playlists[playlistId] ? state.playlists[playlistId] : {})

};

export default PlaylistShowPage;

