import {useDispatch, useSelector} from 'react-redux';
import {
  addChar,
  checkGuess,
  deleteChar,
} from '../../redux/actions/gameMapActions';
import {
  setCurrentColumn,
  setCurrentRow,
  setGameWon,
} from '../../redux/actions/gameStateActions';

const useKeyboard = () => {
  const dispatch = useDispatch();
  const {answer, currentColumn, currentRow} = useSelector(
    state => state.gameState,
  );
  const gameMap = useSelector(state => state.gameMap);

  const changeCurrentColumn = value => {
    dispatch(setCurrentColumn(value));
  };

  const onPressEnter = () => {
    if (currentColumn !== 5) {
      return;
    }
    const result = gameMap[currentRow].guess.join('');
    dispatch(checkGuess(currentRow));
    if (result === answer) {
      dispatch(setGameWon(true));
    }
    dispatch(setCurrentRow(currentRow + 1));
    changeCurrentColumn(0);
  };

  const onPressClear = () => {
    const prevColumn = currentColumn - 1;

    if (prevColumn < 0) return;

    dispatch(deleteChar(prevColumn, currentRow));
    changeCurrentColumn(prevColumn);
  };

  const onPressLetter = key => {
    if (currentColumn >= 5) {
      return;
    }
    dispatch(addChar(currentColumn, currentRow, key));
    changeCurrentColumn(currentColumn + 1);
  };

  return {onPressClear, onPressEnter, onPressLetter};
};

export default useKeyboard;
