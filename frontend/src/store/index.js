import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import albumsReducer from './albums';
import sessionReducer from './session';
import currentPlaylistReducer from './currentPlaylist';
import currentTrackReducer from './currentTrack';
import searchedAlbumsReducer from './searchedAlbums';
import playlistsReducer from './playlists';
import songsReducer from './songs';
import searchedSongsReducer from './searchedSongs';

export const rootReducer = combineReducers({
    session: sessionReducer,
    albums: albumsReducer,
    playlists: playlistsReducer,
    currentPlaylist: currentPlaylistReducer,
    currentTrack: currentTrackReducer,
    searchedAlbums: searchedAlbumsReducer,
    songs: songsReducer,
    searchedSongs: searchedSongsReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
