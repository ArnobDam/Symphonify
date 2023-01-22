const RECEIVE_SEARCHED_SONGS = 'songs/RECEIVE_SEARCHED_SONGS';

export const receiveSearchedSongs = (songs) => ({
    type: RECEIVE_SEARCHED_SONGS,
    songs
})

const searchedSongsReducer = (state = {}, action) => {
    // const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_SEARCHED_SONGS:
            return action.songs;
        default:
            return state;
    }
}

export default searchedSongsReducer;