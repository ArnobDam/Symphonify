const RECEIVE_SONGS = 'songs/RECEIVE_SONGS';

const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
})

export const getSongs = (state) => state.songs ? Object.values(state.songs) : [];

// export const fetchSongs = () => async dispatch => {
//     const response 
// }