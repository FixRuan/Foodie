import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 52,
    backgroundColor: '#fff'
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 52
  }
})
