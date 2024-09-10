import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Login() {
  return (
    <View style={styles.container}>
      <Header text='Acesse sua conta' />

      <View style={styles.inputContainer}>
        <Input label='E-mail' />
        <Input label='Senha' />
      </View>

      <Button text='Acessar' />

      <TouchableOpacity style={styles.createAccountContainer} activeOpacity={0.5}>
        <Text style={styles.createAccountText}>Criar minha conta</Text>
      </TouchableOpacity>
    </View>
  )
}
