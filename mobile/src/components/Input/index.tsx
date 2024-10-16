import { Text, TextInput, View } from 'react-native'

import { styles } from './styles'

interface InputProps {
  label: string
  password?: boolean
  onChangeText?: (text: string) => void
  value?: string
}

export function Input({ label, password = false, onChangeText = () => {}, value }: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>

      <TextInput
        style={styles.input}
        secureTextEntry={password}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  )
}
