import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const boardMap = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const cellWidth = (DEVICE_WIDTH - 40) / boardMap.length;
const cellHeight = cellWidth * 1.3;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    // alignSelf: 'stretch',
    width: DEVICE_WIDTH * 0.94,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  emptyCell: {
    width: cellWidth,
    aspectRatio: 1,
    margin: 4,
    borderWidth: 3,
    borderColor: colors.darkgrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    width: cellWidth,
    aspectRatio: 1,
    margin: 4,
    borderWidth: 3,
    borderColor: colors.darkgrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    color: colors.lightgrey,
    fontSize: 30,
    fontWeight: '800',
  },
});
