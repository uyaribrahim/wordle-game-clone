import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {keys} from '../constants/keys';
import {keyWidth, styles} from './styles';

const Keyboard = props => {
  const isLongButton = key => {
    return key === 'ENTER' || key === 'CLEAR';
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
              ]}>
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
