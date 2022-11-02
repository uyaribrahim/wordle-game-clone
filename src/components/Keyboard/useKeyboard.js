import {useDispatch, useSelector} from 'react-redux';
import {setChar} from '../../redux/actions/gameMapActions';
import {
  checkWord,
  setCurrentColumn,
  setGameWon,
  setShakeWrongGuess,
} from '../../redux/actions/gameStateActions';

const useKeyboard = () => {
  const dispatch = useDispatch();
  const {answer, currentColumn, currentRow, prevInvalidWord} = useSelector(
    state => state.gameState,
  );
  const gameMap = useSelector(state => state.gameMap);

  const changeCurrentColumn = value => {
    dispatch(setCurrentColumn(value));
  };

  const onPressEnter = () => {
    const result = gameMap[currentRow].guess.join('');
    if (currentColumn !== 5) {
      dispatch(setShakeWrongGuess(true, 'Yeterli harf yok'));
      return;
    }
    if (prevInvalidWord == result) {
      dispatch(setShakeWrongGuess(true, 'Kelime listesinde yok'));
      return;
    }
    dispatch(checkWord(result, currentRow));
    if (result === answer) {
      dispatch(setGameWon(true));
    }
  };

  const onPressClear = () => {
    const prevColumn = currentColumn - 1;

    if (prevColumn < 0) return;

    dispatch(setChar(prevColumn, currentRow, ''));
    changeCurrentColumn(prevColumn);
  };

  const onPressLetter = key => {
    if (currentColumn >= 5) {
      return;
    }
    dispatch(setChar(currentColumn, currentRow, key));
    changeCurrentColumn(currentColumn + 1);
  };

  return {onPressClear, onPressEnter, onPressLetter};
};

export default useKeyboard;
