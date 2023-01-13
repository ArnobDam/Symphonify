import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylists } from '../../store/playlists';
import './PlaylistIndexList.css'

function PlaylistIndexList() {
    const dispatch = useDispatch();
    const playlists = useSelector(state => state.playlists ? Object.values(state.playlists) : []);

    useEffect(() => {
        dispatch(fetchPlaylists())
    }, [dispatch]);

    return (
        <></>
    )
};

export default PlaylistIndexList;