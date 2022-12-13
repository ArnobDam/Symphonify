export const RECEIVE_CURRENT_PLAYLIST = 'currentPlaylist/RECEIVE_CURRENT_PLAYLIST';

export const receiveCurrentPlaylist = (currentPlaylist) => ({
    type: RECEIVE_CURRENT_PLAYLIST,
    currentPlaylist
})

const currentPlaylistReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_CURRENT_PLAYLIST:
            nextState[action.currentPlaylist.id] = action.currentPlaylist;
            return nextState;
        default:
            return state;
    }
}

export default currentPlaylistReducer;