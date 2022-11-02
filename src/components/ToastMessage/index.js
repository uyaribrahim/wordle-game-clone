import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ToastMessage = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const {shakeWrongGuess, toastMessage} = useSelector(state => state.gameState);

  const viewOpacity = animatedValue.interpolate({
    inputRange: [0, 0.15, 0.5, 0.75, 1],
    outputRange: [0, 1, 1, 1, 0],
  });

  useEffect(() => {
    if (shakeWrongGuess) {
      startAnimation();
    }
  }, [shakeWrongGuess]);

  const startAnimation = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      duration: 2000,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: viewOpacity,
        },
      ]}>
      <Text style={styles.text}>{toastMessage}</Text>
    </Animated.View>
  );
};

export default ToastMessage;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#f2f2f2',
    alignSelf: 'center',
    top: '13%',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: '600',
    fontSize: 15,
  },
});
