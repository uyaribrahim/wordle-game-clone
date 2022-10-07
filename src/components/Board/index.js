import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../../constants/colors';
import {styles} from './styles';

const Board = ({answer}) => {
  const state = useSelector(state => state);
  const gameMap = state.gameMap;

  const arrayAnswer = answer.split('');

  const cellHasValue = value => {
    return value !== '';
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
    </View>
  );
};

export default Board;
