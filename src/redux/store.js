import {configureStore} from '@reduxjs/toolkit';
import gameMapReducer from './reducers/gameMapReducer';

export const store = configureStore({
  reducer: {
    gameMap: gameMapReducer,
  },
});
