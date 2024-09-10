import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 52,
    paddingHorizontal: 52
  },
  inputContainer: {
    marginTop: 58,
    marginBottom: 24
  },
  createAccountContainer: {
    width: '100%',
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 52
  },
  createAccountText: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md
  }
})
