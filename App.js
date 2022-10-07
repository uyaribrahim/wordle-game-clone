import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {colors} from './src/constants/colors';
import {store} from './src/redux/store';
import Game from './src/screen/Game';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Game />
      </Provider>
    </SafeAreaView>
  );
}

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
