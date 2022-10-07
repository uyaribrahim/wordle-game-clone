import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Board from '../components/Board';
import Keyboard from '../components/Keyboard';
import {colors} from '../constants/colors';
import {words} from '../constants/words';

const Game = props => {
  var ANSWER = words[Math.floor(Math.random() * words.length)]
    .replace('i', 'İ')
    .toUpperCase();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>WORDLE</Text>
      </View>
      <Board answer={ANSWER} />
      <Keyboard />
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  titleContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.lightgrey,
    fontSize: 30,
    fontWeight: '800',
  },
});
