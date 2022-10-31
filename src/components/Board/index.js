import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../constants/colors';
import {resetGameMap} from '../../redux/actions/gameMapActions';
import {resetGameState} from '../../redux/actions/gameStateActions';
import {styles} from './styles';

const Board = ({answer}) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const gameMap = state.gameMap;

  const arrayAnswer = answer.split('');

  const cellHasValue = value => {
    return value !== '';
  };

  const handleReset = () => {
    dispatch(resetGameState());
    dispatch(resetGameMap());
  };

  const getColor = (key, index) => {
    let upperKey = key;
    let backgrounColor = colors.darkgrey;
    if (answer.includes(upperKey)) {
      backgrounColor = colors.secondary;
    }
    if (arrayAnswer[index] === upperKey) {
      backgrounColor = colors.primary;
    }
    return backgrounColor;
  };

  return (
    <View style={styles.container}>
      {gameMap.map((row, index) => (
        <View key={index} style={styles.row}>
          {row.guess.map((cell, cellIndex) => (
            <View
              key={index + cellIndex}
              style={[
                styles.cell,
                cellHasValue(cell) ? {borderColor: colors.grey} : {},
                row.isCompleted
                  ? {
                      backgroundColor: getColor(cell, cellIndex),
                      borderWidth: 0,
                    }
                  : {},
              ]}>
              <Text style={styles.cellText}>
                {cell.replace('i', 'İ').toUpperCase()}
              </Text>
            </View>
          ))}
        </View>
      ))}
      <Text style={{color: 'white'}}>{answer}</Text>
      <Pressable onPress={handleReset}>
        <Text style={styles.cellText}>Sıfırla</Text>
      </Pressable>
    </View>
  );
};

export default Board;
