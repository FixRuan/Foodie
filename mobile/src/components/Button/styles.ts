import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../constants/theme'

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    backgroundColor: COLORS.red
  },
  buttonText: {
    fontSize: FONT_SIZE.md,
    color: 'white',
    padding: 14,
    textAlign: 'center'
  }
})
