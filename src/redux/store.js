import {configureStore} from '@reduxjs/toolkit';
import gameMapReducer from './reducers/gameMapReducer';
import gameStateReducer from './reducers/gameStateReducer';

export const store = configureStore({
  reducer: {
    gameMap: gameMapReducer,
    gameState: gameStateReducer,
  },
});
