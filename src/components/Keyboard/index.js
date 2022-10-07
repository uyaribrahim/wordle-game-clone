import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {keys} from '../../constants/keys';
import {
  addChar,
  checkGuess,
  deleteChar,
} from '../../redux/actions/gameMapActions';
import {keyWidth, styles} from './styles';

const Keyboard = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);

  const isLongButton = key => {
    return key === 'ENTER' || key === 'CLEAR';
  };

  const onPressEnter = () => {
    let result = state.gameMap[currentRow].guess.join('');
    if (currentColumn !== 5) {
      return;
    }
    dispatch(checkGuess(currentRow));
    setCurrentRow(row => row + 1);
    setCurrentColumn(0);
  };

  const onPressClear = () => {
    let prevColumn = currentColumn - 1;

    if (prevColumn < 0) return;

    dispatch(deleteChar(prevColumn, currentRow));
    setCurrentColumn(prevColumn);
  };

  const onPressLetter = key => {
    if (currentColumn >= 5) {
      return;
    }
    dispatch(addChar(currentColumn, currentRow, key));
    setCurrentColumn(column => column + 1);
  };

  const handleKey = value => {
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
