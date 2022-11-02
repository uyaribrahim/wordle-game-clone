import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../constants/colors';
import {resetGameMap} from '../../redux/actions/gameMapActions';
import {
  resetGameState,
  setShakeWrongGuess,
} from '../../redux/actions/gameStateActions';
import {styles} from './styles';

const Board = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const gameMap = state.gameMap;
  const {currentRow, shakeWrongGuess, answer} = state.gameState;

  const shakeAnimated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (shakeWrongGuess) {
      shakeRow();
    }
  }, [shakeWrongGuess]);

  const shakeRow = () => {
    shakeAnimated.setValue(0);
    Animated.timing(shakeAnimated, {
      duration: 500,
      toValue: 3,
      ease: Easing.bounce,
      useNativeDriver: true,
    }).start(() => dispatch(setShakeWrongGuess(false)));
  };

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

  const getTranslateX = index => {
    return currentRow === index
      ? shakeAnimated.interpolate({
          inputRange: [0, 0.5, 0.75, 1, 1.5, 2, 2.25, 2.5, 3],
          outputRange: [0, -8, 0, 8, 0, -8, 0, 8, 0],
        })
      : 0;
  };

  return (
    <View style={styles.container}>
      {gameMap.map((row, index) => (
        <Animated.View
          key={index}
          style={[
            styles.row,
            {
              transform: [
                {
                  translateX: getTranslateX(index),
                },
              ],
            },
          ]}>
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
              <Text style={styles.cellText}>{cell}</Text>
            </View>
          ))}
        </Animated.View>
      ))}
      <Text style={{color: 'white'}}>{answer}</Text>
      <Pressable onPress={handleReset}>
        <Text style={styles.cellText}>Sıfırla</Text>
      </Pressable>
    </View>
  );
};

export default Board;
