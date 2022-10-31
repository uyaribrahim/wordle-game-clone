import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {keys} from '../../constants/keys';
import {keyWidth, styles} from './styles';
import useKeyboard from './useKeyboard';

const Keyboard = props => {
  const {onPressClear, onPressEnter, onPressLetter} = useKeyboard();
  const isWin = useSelector(state => state.gameState.isWin);

  const isLongButton = key => {
    return key === 'ENTER' || key === 'CLEAR';
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
