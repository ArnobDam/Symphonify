import csrfFetch from "./csrf";

//action constants
export const RECEIVE_PLAYLISTS = 'playlists/RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'playlists/RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'playlists/REMOVE_PLAYLIST';

//regular actions
export const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists
})

export const receivePlaylist = (payload) => ({
    type: RECEIVE_PLAYLIST,
    payload
})

export const removePlaylist = (playlistId) => ({
    type: REMOVE_PLAYLIST,
    playlistId
})

//selectors
export const getPlaylists = (state) => state.playlists ? Object.values(state.playlists) : [];
export const getPlaylist = (playlistId) => (state) => state.playlists ? state.playlists[playlistId] : null;

//thunk actions
export const fetchPlaylists = () => async dispatch => {
    const response = await fetch(`/api/playlists`);
    const data = await response.json();
    return dispatch(receivePlaylists(data));
}

export const fetchPlaylist = (playlistId) => async dispatch => {
    const response = await fetch(`/api/playlists/${playlistId}`);
    const data = await response.json();
    return dispatch(receivePlaylist(data));
}

export const createPlaylist = (payload) => async dispatch => { //may need playlist not payload
    const response = await csrfFetch(`/api/playlists`, {
        method: 'POST',
        body: JSON.stringify(payload.playlist),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    return dispatch(receivePlaylist(data));
}

export const updatePlaylist = (payload) => async dispatch => { //may need playlist not payload
    const response = await csrfFetch(`/api/playlists/${payload.playlist.id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload.playlist),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    return dispatch(receivePlaylist(data));
}

export const deletePlaylist = (playlistId) => async dispatch => {
    await csrfFetch(`/api/playlists/${playlistId}`, { //maybe need const response = at start
        method: 'DELETE'
    })
    return dispatch(removePlaylist(playlistId));
}

//reducer
const playlistsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            return { ...nextState, ...action.playlists };
        case RECEIVE_PLAYLIST:
            nextState[action.payload.playlist.id] = action.payload.playlist;
            return nextState;
        case REMOVE_PLAYLIST:
            delete nextState[action.playlistId]; //may need to change, maybe use payload or playlist.playlistId
            return nextState;
        default:
            return state;
    }
}

export default playlistsReducer;