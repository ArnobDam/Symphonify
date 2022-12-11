//action constants

export const RECEIVE_ALBUMS = 'albums/RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'albums/RECEIVE_ALBUM';


//regular actions

export const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
})

export const receiveAlbum = (album) => ({
    type: RECEIVE_ALBUM,
    album
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
