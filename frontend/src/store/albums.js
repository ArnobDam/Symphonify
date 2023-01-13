//action constants

export const RECEIVE_ALBUMS = 'albums/RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'albums/RECEIVE_ALBUM';


//regular actions

export const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
})

export const receiveAlbum = (payload) => ({
    type: RECEIVE_ALBUM,
    payload
})

//selectors

export const getAlbums = (state) => state.albums ? Object.values(state.albums) : [];
export const getAlbum = (albumId) => (state) => state.albums ? state.albums[albumId] : null;

//thunk actions

/*
Export the following functions with the specified parameters:

1. `fetchAlbums`
2. `fetchAlbum(albumId)`

Each function should call `fetch` to perform the desired database operation and
dispatch the appropriate action upon a successful response. (You do not need to
do anything if the `fetch` response is unsuccessful.) 
*/

export const fetchAlbums = () => async dispatch => {
    const response = await fetch(`/api/albums`);
    const data = await response.json();
    return dispatch(receiveAlbums(data));
}

export const fetchAlbum = (albumId) => async dispatch => {
    const response = await fetch(`/api/albums/${albumId}`);
    const data = await response.json();
    return dispatch(receiveAlbum(data)); //potentially need data.album
}

//reducer

const albumsReducer = (state = {}, action) => {
    const nextState ={ ...state }

    switch (action.type) {
        case RECEIVE_ALBUMS:
            return { ...nextState, ...action.albums };
        case RECEIVE_ALBUM:
            nextState[action.payload.album.id] = action.payload.album;
            return nextState;
        default:
            return state;
    }
}

export default albumsReducer;
