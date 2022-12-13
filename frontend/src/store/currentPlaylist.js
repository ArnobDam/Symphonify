export const RECEIVE_CURRENT_PLAYLIST = 'currentPlaylist/RECEIVE_CURRENT_PLAYLIST';
export const CREATE_CURRENT_PLAYLIST = 'currentPlaylist/CREATE_CURRENT_PLAYLIST';

export const receiveCurrentPlaylist = (currentPlaylist) => ({
    type: RECEIVE_CURRENT_PLAYLIST,
    currentPlaylist
})

export const createCurrentPlaylist = (songsArr) => ({
    type: CREATE_CURRENT_PLAYLIST,
    songsArr
})

export const makeCurrentPlaylist = (albumId) => async dispatch => {
    let response = await fetch(`/api/albums/${albumId}`);
    const data = await response.json();
    dispatch(createCurrentPlaylist(data));
    return data;
}

const currentPlaylistReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_CURRENT_PLAYLIST:
            nextState[action.currentPlaylist.id] = action.currentPlaylist;
            return nextState;
        case CREATE_CURRENT_PLAYLIST:
            nextState[action.songsArr.album.id] = action.songsArr;
            return nextState;
        default:
            return state;
    }
}

export default currentPlaylistReducer;