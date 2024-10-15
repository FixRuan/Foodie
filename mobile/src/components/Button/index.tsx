import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

interface ButtonInterface {
  text: string
  onPress: () => void
}

export function Button({ text, onPress }: ButtonInterface) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
