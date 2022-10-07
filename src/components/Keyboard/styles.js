import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {keys} from '../../constants/keys';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export const keyWidth = (DEVICE_WIDTH - 35) / keys[0].length;
const keyHeight = keyWidth * 1.5;

export const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    marginBottom: 30,
  },
  row: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  key: {
    width: keyWidth,
    height: keyHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkgrey,
    margin: 1.5,
    borderRadius: 3,
  },
  longKey: {
    width: 12,
  },
  keyText: {
    color: 'white',
  },
});
