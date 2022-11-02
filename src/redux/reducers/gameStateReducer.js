import {words} from '../../constants/words';

const initialState = {
  answer: newWord(),
  usedKeys: {},
  gameEnded: false,
  isWin: false,
  currentRow: 0,
  currentColumn: 0,
  shakeWrongGuess: false,
  prevInvalidWord: '',
  toastMessage: '',
};

const gameStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GAME_WON':
      return {...state, isWin: action.payload};

    case 'RESET_GAME_STATE':
      return {
        ...initialState,
        answer: newWord(),
      };

    case 'SET_CURRENT_COLUMN':
      return {...state, currentColumn: action.payload.value};

    case 'SET_CURRENT_ROW':
      return {...state, currentRow: action.payload.value};

    case 'SHAKE':
      return {
        ...state,
        shakeWrongGuess: action.payload.value,
        toastMessage: action.payload.message ?? state.toastMessage,
      };

    case 'SET_PREV_INVALID_WORD':
      return {...state, prevInvalidWord: action.payload.value};

    default:
      return state;
  }
};

function newWord() {
  return words[Math.floor(Math.random() * words.length)].split('i').join('İ');
}

export default gameStateReducer;
