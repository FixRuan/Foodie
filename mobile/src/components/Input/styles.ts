import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 18
  },
  title: {
    fontSize: FONT_SIZE.md,
    color: COLORS.dark_gray,
    marginBottom: 4
  },
  input: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.light_gray,
    borderRadius: 6,
    padding: 10
  }
})
