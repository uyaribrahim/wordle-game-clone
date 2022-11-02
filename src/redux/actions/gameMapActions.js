const setChar = (_column, _row, key) => ({
  type: 'SET_CHAR',
  payload: {row: _row, column: _column, key: key},
});

const checkGuess = _row => ({
  type: 'CHECK_GUESS',
  payload: {row: _row},
});

const resetGameMap = () => ({
  type: 'RESET_GAME_MAP',
});

export {setChar, checkGuess, resetGameMap};
