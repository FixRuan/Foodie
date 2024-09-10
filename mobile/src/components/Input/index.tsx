import { Text, TextInput, View } from 'react-native'

import { styles } from './styles'

interface InputProps {
  label: string
}

export function Input({ label }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  )
}
