//action constants
export const RECEIVE_PLAYLISTS = 'playlists/RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'playlists/RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'playlists/REMOVE_PLAYLIST';

//regular actions
export const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists
})

export const receivePlaylist = (payload) => ({
    type: RECEIVE_PLAYLIST,
    payload
})

export const removePlaylist = (playlistId) => ({
    type: REMOVE_PLAYLIST,
    playlistId
})

//selectors

export const getPlaylists = (state) => state.playlists ? Object.values(state.playlists) : [];
export const getPlaylist = (playlistId) => (state) => state.playlists ? state.playlists[playlistId] : null;


