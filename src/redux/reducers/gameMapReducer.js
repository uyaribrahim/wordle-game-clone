const INITIAL_STATE = [
  {guess: ['', '', '', '', ''], isCompleted: false},
  {guess: ['', '', '', '', ''], isCompleted: false},
  {guess: ['', '', '', '', ''], isCompleted: false},
  {guess: ['', '', '', '', ''], isCompleted: false},
  {guess: ['', '', '', '', ''], isCompleted: false},
  {guess: ['', '', '', '', ''], isCompleted: false},
];

const gameMapReducer = (state = INITIAL_STATE, action) => {
  const row = action?.payload?.row;
  switch (action.type) {
    case 'ADD_CHAR':
      return state.map((mapRow, rowIndex) =>
        rowIndex === row
          ? {
              ...mapRow,
              guess: mapRow.guess.map((cell, cellIndex) => {
                if (cellIndex == action.payload.column) {
                  return action.payload.key;
                }
                return cell;
              }),
            }
          : mapRow,
      );
    case 'DELETE_CHAR':
      return state.map((mapRow, rowIndex) =>
        rowIndex === row
          ? {
              ...mapRow,
              guess: mapRow.guess.map((cell, cellIndex) => {
                if (cellIndex == action.payload.column) {
                  return '';
                }
                return cell;
              }),
            }
          : mapRow,
      );

    case 'CHECK_GUESS':
      return state.map((mapRow, rowIndex) =>
        rowIndex == row
          ? {
              ...mapRow,
              isCompleted: true,
            }
          : mapRow,
      );

    case 'RESET_GAME_MAP':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default gameMapReducer;
