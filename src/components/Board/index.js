import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import {styles} from './styles';

const ANSWER = 'SELAM';
const arrayAnswer = ANSWER.split('');

let gameMap = [
  {word: ['h', 'e', 'l', 'l', 'o'], isCompleted: true},
  {word: ['k', 'i', 't', 'a', 'p'], isCompleted: true},
  {word: ['s', 'e', 'a', 'l', 'm'], isCompleted: true},
  {word: ['s', 'e', '', '', ''], isCompleted: false},
  {word: ['', '', '', '', ''], isCompleted: false},
  {word: ['', '', '', '', ''], isCompleted: false},
];

const currentCell = 11;

const mapRow = parseInt(currentCell / 5);
const column = currentCell % 5;

const cellHasValue = value => {
  return value !== '';
};

const getColor = (key, index) => {
  let upperKey = key.replace('i', 'İ').toUpperCase();
  let backgrounColor = colors.darkgrey;
  if (ANSWER.includes(upperKey)) {
    backgrounColor = colors.secondary;
  }
  if (arrayAnswer[index] === upperKey) {
    backgrounColor = colors.primary;
  }
  return backgrounColor;
};

const Board = props => {
  return (
    <View style={styles.container}>
      {gameMap.map((row, index) => (
        <View key={index} style={styles.row}>
          {row.word.map((cell, cellIndex) => (
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
      <Text>a component</Text>
    </View>
  );
};

export default Board;
