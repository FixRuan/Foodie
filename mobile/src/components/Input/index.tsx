import { Text, TextInput, View } from 'react-native'

import { styles } from './styles'

interface InputProps {
  label: string
  password?: boolean
}

export function Input({ label, password = false }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInput style={styles.input} secureTextEntry={password} />
    </View>
  )
}
