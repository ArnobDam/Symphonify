import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchPlaylists } from '../../store/playlists';
import './PlaylistIndexList.css'

function PlaylistIndexList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const playlists = useSelector(state => state.playlists ? Object.values(state.playlists) : []);

    // console.log(playlists[0].title);
    useEffect(() => {
        dispatch(fetchPlaylists())
    }, [dispatch]);

    const PlaylistTitles = () => {
        return (
            <ul className='playlist-index-list'>
                {playlists.map((playlist) => {
                    return (
                        <li onClick={(e) => history.push(`/playlists/${playlist.id}`)}>
                            {playlist.title}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <>
            {/* {playlists[0].title} */}
            <PlaylistTitles />
        </>
    )
};

export default PlaylistIndexList;