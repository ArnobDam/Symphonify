import csrfFetch from "./csrf";
import { fetchPlaylist } from "./playlists";

const RECEIVE_PLAYLIST_SONGS = 'playlistSongs/RECEIVE_PLAYLIST_SONGS';
const RECEIVE_PLAYLIST_SONG = 'playlistSongs/RECEIVE_PLAYLIST_SONG';
const REMOVE_PLAYLIST_SONG = 'playlistSongs/REMOVE_PLAYLIST_SONG';

const receivePlaylistSongs = (playlistSongs) => ({
    type: RECEIVE_PLAYLIST_SONGS,
    playlistSongs
})

const receivePlaylistSong = (playlistSong) => ({
    type: RECEIVE_PLAYLIST_SONG,
    playlistSong
})

const removePlaylistSong = (playlistSongId) => ({
    type: REMOVE_PLAYLIST_SONG,
    playlistSongId
})

export const getPlaylistSongs = (state) => state.playlistSongs ? Object.values(state.playlistSongs) : [];
export const getPlaylistSong = (playlistSongId) => (state) => state.playlistSongs ? state.playlistSongs[playlistSongId] : null;

export const fetchPlaylistSongs = () => async dispatch => {
    const response = await fetch(`/api/playlist_songs`);
    const data = await response.json();
    return dispatch(receivePlaylistSongs(data));
}

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
    // console.log(playlistSongId)
    // debugger
    const response = await csrfFetch(`/api/playlist_songs/${playlistSongId}`, {
        method: 'DELETE'
    })
    return dispatch(removePlaylistSong(playlistSongId));
}

// export const deletePlaylistSong = (playlistId, songId) => async dispatch => {
//     const response = await csrfFetch(`/api/playlist_songs?playlist_id=${playlistId}&song_id=${songId}`, {
//         method: 'DELETE'
//     })
// }


const playlistSongsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_PLAYLIST_SONGS:
            return { ...nextState, ...action.playlistSongs };
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