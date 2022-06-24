import {StyleSheet} from 'react-native';
import {colors} from '../../Styles';

const styles = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    backgroundColor: colors.WHITE,
    paddingVertical: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },

  alignment: {
    paddingHorizontal: 15,
    flexGrow: 1,
    flexBasis: 1,
    justifyContent: 'center',
  },

  imageWrapper: {
    alignItems: 'center',
  },

  alertWrapper: {
    alignItems: 'flex-end',
  },

  alertIconWrapper: {
    position: 'relative',
  },

  alertBadge: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: colors.THEME_SKYBLUE,
    width: 14,
    height: 14,
    borderRadius: 7,
    borderColor: colors.WHITE,
    borderWidth: 1,
  },
});

export default styles;
