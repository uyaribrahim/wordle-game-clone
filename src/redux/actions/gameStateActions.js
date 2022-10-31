const setGameWon = value => ({
  type: 'SET_GAME_WON',
  payload: value,
});
const resetGameState = () => ({
  type: 'RESET_GAME_STATE',
});
const setCurrentColumn = value => ({
  type: 'SET_CURRENT_COLUMN',
  payload: {value: value},
});
const setCurrentRow = value => ({
  type: 'SET_CURRENT_ROW',
  payload: {value: value},
});

export {setGameWon, resetGameState, setCurrentColumn, setCurrentRow};
