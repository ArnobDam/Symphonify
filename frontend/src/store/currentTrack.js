// export const RECEIVE_CURRENT_TRACK = 'currentTrack/RECEIVE_CURRENT_TRACK';
export const SET_CURRENT_TRACK = 'currentTrack/SET_CURRENT_TRACK';

// export const receiveCurrentTrack = (songId) => ({
//     type: RECEIVE_CURRENT_TRACK,
//     songId
// }) 

export const setCurrentTrack = (songId) => ({
    type: SET_CURRENT_TRACK,
    songId
})

// export const setTheCurrentTrack = (songId) => async dispatch => {
//     return dispatch(setCurrentTrack(songId));
// }

const currentTrackReducer = (state = {}, action) => {
    // const nextState = { ...state }

    switch (action.type) {
        case SET_CURRENT_TRACK:
            // nextState["currentTrack"] = action.songId;
            // debugger
            return action.songId;
        default:
            return state;
    }
}

export default currentTrackReducer;