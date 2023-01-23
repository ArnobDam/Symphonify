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

// export const deletePlaylistSong = (playlistSongId) => async dispatch => {

// }