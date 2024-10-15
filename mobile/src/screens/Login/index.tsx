import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useState } from 'react'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function login() {
    console.log(email, password)
  }

  return (
    <View style={styles.container}>
      <Header text='Acesse sua conta' />

      <View style={styles.inputContainer}>
        <Input value={email} label='E-mail' onChangeText={text => setEmail(text)} />
        <Input value={password} label='Senha' onChangeText={text => setPassword(text)} password />
      </View>

      <Button text='Acessar' onPress={login} />

      <TouchableOpacity style={styles.createAccountContainer} activeOpacity={0.5}>
        <Text style={styles.createAccountText}>Criar minha conta</Text>
      </TouchableOpacity>
    </View>
  )
}
