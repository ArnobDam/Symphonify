import csrfFetch from "./csrf";

const RECEIVE_PLAYLIST_SONG = 'playlistSongs/RECEIVE_PLAYLIST_SONG';
const REMOVE_PLAYLIST_SONG = 'playlistSongs/REMOVE_PLAYLIST_SONG';

const receivePlaylistSong = (playlistSong) => ({
    type: RECEIVE_PLAYLIST_SONG,
    playlistSong
})

const removePlaylistSong = (playlistSongId) => ({
    type: REMOVE_PLAYLIST_SONG,
    playlistSongId
})

export const createPlaylistSong = (playlistSong) => async dispatch => {
    const response = await csrfFetch(`/api/playlist_songs`, {
        method: 'POST',
        body: JSON.stringify(playlistSong),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    return dispatch(receivePlaylistSong(playlistSong));
}

export const deletePlaylistSong = (playlistSongId) => async dispatch => {
    const response = await csrfFetch(`/api/playlist_songs/${playlistSongId}`, {
        method: 'DELETE'
    })
    return dispatch(removePlaylistSong(playlistSongId));
}

const playlistSongsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_PLAYLIST_SONG:
            nextState[action.playlistSong.id] = action.playlistSong;
            return nextState;
        case REMOVE_PLAYLIST_SONG:
            delete nextState[action.playlistSongId];
            return nextState;
        default:
            return state;
    }
};

export default playlistSongsReducer;