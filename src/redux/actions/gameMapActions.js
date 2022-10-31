const addChar = (_column, _row, key) => ({
  type: 'ADD_CHAR',
  payload: {row: _row, column: _column, key: key},
});

const deleteChar = (_column, _row) => ({
  type: 'DELETE_CHAR',
  payload: {row: _row, column: _column},
});

const checkGuess = _row => ({
  type: 'CHECK_GUESS',
  payload: {row: _row},
});

const resetGameMap = () => ({
  type: 'RESET_GAME_MAP',
});

export {addChar, deleteChar, checkGuess, resetGameMap};
