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

    const [songsArr, setSongsArr] = useState([]);
    const [songTitlesArr, setSongTitlesArr] = useState([]);
    
    useEffect(() => {
        dispatch(fetchPlaylist(playlistId)).then(res => {
            // console.log(res)
            let data = res.payload.playlist;

            if (data.creator.username) {
                setUsername(data.creator.username);
            }

            if (data.songs) {
                for (const [key, value] of Object.entries(data.songs)) {

                    if (!songTitlesArr.includes(value.title)) {
                        
                        setSongsArr((songsArr) => [...songsArr, value])
                        setSongTitlesArr((songTitlesArr) => [...songTitlesArr, value.title])

                    }

                }
            }
        });

    }, [playlistId, dispatch]);

    // console.log(username)
    // console.log(songTitlesArr);

    if (!playlist) {
        return null;
    }

    return (
        <div className='playlist-show-page'>

        </div>
    )
};

export default PlaylistShowPage;

