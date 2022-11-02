import {apiService} from '../../services/apiService';
import {checkGuess} from './gameMapActions';

const setGameWon = value => ({
  type: 'SET_GAME_WON',
  payload: value,
});

const setCurrentColumn = value => ({
  type: 'SET_CURRENT_COLUMN',
  payload: {value: value},
});

const setCurrentRow = value => ({
  type: 'SET_CURRENT_ROW',
  payload: {value: value},
});

const setShakeWrongGuess = (value, message) => ({
  type: 'SHAKE',
  payload: {value: value, message: message},
});

const resetGameState = () => ({
  type: 'RESET_GAME_STATE',
});

const setPrevInvalidWord = value => ({
  type: 'SET_PREV_INVALID_WORD',
  payload: {value: value},
});

const checkWord = (word, currRow) => {
  return async dispatch => {
    let result = await apiService.get('/yazim', {
      params: {
        ara: word.split('I').join('ı').toLowerCase(),
      },
    });
    if (result.data.error) {
      dispatch(setShakeWrongGuess(true, 'Kelime listesinde yok'));
      dispatch(setPrevInvalidWord(word));
      return;
    }
    dispatch(checkGuess(currRow));
    dispatch(setCurrentRow(currRow + 1));
    dispatch(setCurrentColumn(0));
  };
};

export {
  setGameWon,
  resetGameState,
  setCurrentColumn,
  setCurrentRow,
  setShakeWrongGuess,
  checkWord,
  setPrevInvalidWord,
};
