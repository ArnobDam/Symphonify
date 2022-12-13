export const RECEIVE_SONGS = 'songs/RECEIVE_SONGS';

export const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
})