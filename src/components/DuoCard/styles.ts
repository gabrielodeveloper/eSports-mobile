import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
  width: 200,
  backgroundColor: THEME.COLORS.SHAPE,
  borderRadius: 8,
  padding: 20,
  marginRight: 16,
  alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT,
    marginLeft: 8,
  }
});