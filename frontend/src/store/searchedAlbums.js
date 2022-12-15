export const RECEIVE_SEARCHED_ALBUMS = 'albums/RECEIVE_SEARCHED_ALBUMS';

export const receiveSearchedAlbums = (albums) => ({
    type: RECEIVE_SEARCHED_ALBUMS,
    albums
})

const searchedAlbumsReducer = (state = {}, action) => {
    // const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_SEARCHED_ALBUMS:
            // nextState["currentTrack"] = action.songId;
            // debugger
            return action.albums;
        default:
            return state;
    }
}

export default searchedAlbumsReducer;