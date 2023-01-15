// export const RECEIVE_CURRENT_PLAYLIST = 'currentPlaylist/RECEIVE_CURRENT_PLAYLIST';
export const CREATE_CURRENT_PLAYLIST_ALBUM = 'currentPlaylist/CREATE_CURRENT_PLAYLIST_ALBUM';
export const CREATE_CURRENT_PLAYLIST_PLAYLIST = 'currentPlaylist/CREATE_CURRENT_PLAYLIST_PLAYLIST';
// export const DESTROY_CURRENT_PLAYLIST = 'currentPlaylist/DESTROY_CURRENT_PLAYLIST';

// export const receiveCurrentPlaylist = (currentPlaylist) => ({
//     type: RECEIVE_CURRENT_PLAYLIST,
//     currentPlaylist
// })

export const createCurrentPlaylistAlbum = (album) => ({
    type: CREATE_CURRENT_PLAYLIST_ALBUM,
    album
})

export const createCurrentPlaylistPlaylist = (playlist) => ({
    type: CREATE_CURRENT_PLAYLIST_PLAYLIST,
    playlist
})

// export const destroyCurrentPlaylist = ()

// export const makeCurrentPlaylist = (albumId) => async dispatch => {
//     let response = await fetch(`/api/albums/${albumId}`);
//     const data = await response.json();
//     dispatch(createCurrentPlaylist(data));
//     return data;
// }

export const makeCurrentPlaylistAlbum = (albumId) => (dispatch, getState) => {
    const { albums } = getState();
    const album = albums[albumId];
    dispatch(createCurrentPlaylistAlbum(album));
};

export const makeCurrentPlaylistPlaylist = (playlistId) => (dispatch, getState) => {
    const { playlists } = getState();
    const playlist = playlists[playlistId];
    dispatch(createCurrentPlaylistPlaylist(playlist));
};

const currentPlaylistReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        // case RECEIVE_CURRENT_PLAYLIST:
        //     nextState[action.currentPlaylist.id] = action.currentPlaylist;
        //     return nextState;
        case CREATE_CURRENT_PLAYLIST_ALBUM:
            // delete nextState[action];
            // nextState[action.songsArr.album.id] = action.songsArr;
            // debugger;
            return action.album;
        case CREATE_CURRENT_PLAYLIST_PLAYLIST:
            return action.playlist;
        default:
            return state;
    }
}

export default currentPlaylistReducer;