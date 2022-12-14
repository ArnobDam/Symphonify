// export const RECEIVE_CURRENT_PLAYLIST = 'currentPlaylist/RECEIVE_CURRENT_PLAYLIST';
export const CREATE_CURRENT_PLAYLIST = 'currentPlaylist/CREATE_CURRENT_PLAYLIST';
// export const DESTROY_CURRENT_PLAYLIST = 'currentPlaylist/DESTROY_CURRENT_PLAYLIST';

// export const receiveCurrentPlaylist = (currentPlaylist) => ({
//     type: RECEIVE_CURRENT_PLAYLIST,
//     currentPlaylist
// })

export const createCurrentPlaylist = (album) => ({
    type: CREATE_CURRENT_PLAYLIST,
    album
})

// export const destroyCurrentPlaylist = ()

// export const makeCurrentPlaylist = (albumId) => async dispatch => {
//     let response = await fetch(`/api/albums/${albumId}`);
//     const data = await response.json();
//     dispatch(createCurrentPlaylist(data));
//     return data;
// }

export const makeCurrentPlaylist = (albumId) => (dispatch, getState) => {
    const { albums } = getState();
    const album = albums[albumId];
    dispatch(createCurrentPlaylist(album));
};

const currentPlaylistReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        // case RECEIVE_CURRENT_PLAYLIST:
        //     nextState[action.currentPlaylist.id] = action.currentPlaylist;
        //     return nextState;
        case CREATE_CURRENT_PLAYLIST:
            // delete nextState[action];
            // nextState[action.songsArr.album.id] = action.songsArr;
            // debugger;
            return action.album;
        default:
            return state;
    }
}

export default currentPlaylistReducer;