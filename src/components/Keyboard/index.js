import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {keys} from '../../constants/keys';
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
import {keyWidth, styles} from './styles';

const Keyboard = props => {
  const dispatch = useDispatch();
  const {answer, isWin, currentColumn, currentRow} = useSelector(
    state => state.gameState,
  );
  const gameMap = useSelector(state => state.gameMap);

  const changeCurrentColumn = value => {
    dispatch(setCurrentColumn(value));
  };

  const isLongButton = key => {
    return key === 'ENTER' || key === 'CLEAR';
  };

  const onPressEnter = () => {
    if (currentColumn !== 5) {
      return;
    }
    let result = gameMap[currentRow].guess.join('');
    dispatch(checkGuess(currentRow));
    if (result === answer) {
      dispatch(setGameWon(true));
    }
    dispatch(setCurrentRow(currentRow + 1));
    changeCurrentColumn(0);
  };

  const onPressClear = () => {
    let prevColumn = currentColumn - 1;

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

  const handleKey = value => {
    if (isWin) {
      return;
    }
    let key = value.replace('i', 'İ').toUpperCase();
    if (key === 'ENTER') {
      onPressEnter();
      return;
    }
    if (key === 'CLEAR') {
      onPressClear();
      return;
    }
    onPressLetter(key);
  };

  return (
    <View style={styles.container}>
      {keys.map((row, i) => (
        <View key={`row-${i}`} style={styles.row}>
          {row.map((key, i) => (
            <TouchableOpacity
              key={`cell-${i}`}
              style={[
                styles.key,
                isLongButton(key) ? {width: keyWidth * 1.6} : {},
              ]}
              onPress={() => handleKey(key)}>
              <Text style={styles.keyText}>
                {key.replace('i', 'İ').toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Keyboard;

const style = StyleSheet.create({});
