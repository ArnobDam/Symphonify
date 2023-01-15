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
        dispatch(fetchPlaylist(playlistId)).then(res => {
            // console.log(res)
            let data = res.payload.playlist;

            if (data.creator.username) {
                setUsername(data.creator.username);
            }
        });

    }, [playlistId, dispatch]);

    // console.log(username)

    if (!playlist) {
        return null;
    }


    return (
        <div className='playlist-show-page'>

        </div>
    )
};

export default PlaylistShowPage;

