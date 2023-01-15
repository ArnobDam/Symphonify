import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPlaylist } from '../../store/playlists';
import './PlaylistShowPage.css'

function PlaylistShowPage() {
    const dispatch = useDispatch();
    const { playlistId } = useParams();

    const playlist = useSelector(state => state.playlists[playlistId] ? state.playlists[playlistId] : {})
    // const session = useSelector(state => state.session ? state.session : {});

    const [username, setUsername] = useState("");
    
    useEffect(() => {
        dispatch(fetchPlaylist(playlistId));

        if (playlist.creator) {
            setUsername(playlist.creator.username);
        }
        // if (session.user) {
        //     setUsername(session.user.username)
        // }

    }, [playlistId, dispatch]);

    console.log(username)

    return (
        <div className='playlist-show-page'>

        </div>
    )
};

export default PlaylistShowPage;

