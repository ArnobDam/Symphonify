import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchPlaylists } from '../../store/playlists';
import './PlaylistIndexList.css'

function PlaylistIndexList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const playlists = useSelector(state => state.playlists ? Object.values(state.playlists) : []);
    const session = useSelector(state => state.session ? state.session : {});
    // console.log(session.user)

    let usersPlaylists = [];
    if (session.user) {
        usersPlaylists = playlists.filter((playlist) =>
            playlist.creatorId === session.user.id
        )
    }

    // console.log(usersPlaylists);

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, [dispatch]);

    const PlaylistTitles = () => {
        if (usersPlaylists.length > 0) {
            return (
                <ul className='playlist-index-list'>
                    {usersPlaylists.map((playlist) => {
                        return (
                            <li key={playlist.id} onClick={(e) => history.push(`/playlists/${playlist.id}`)}>
                                {playlist.title}
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    return (
        <>
            {/* {playlists[0].title} */}
            <PlaylistTitles />
        </>
    )
};

export default PlaylistIndexList;