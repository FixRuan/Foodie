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
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 52
  },
  formHorizontal: {
    flexDirection: 'row'
  },
  form60: {
    width: '60%'
  },
  form40: {
    width: '40%',
    marginLeft: 5
  }
})
