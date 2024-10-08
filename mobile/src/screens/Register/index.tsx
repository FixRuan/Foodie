import { View } from 'react-native'

import { styles } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header text='Criar sua conta' />
      </View>

      <Input label='Nome Completo' />
      <Input label='E-mail' />
      <Input label='Escolha uma senha' password />
      <Input label='Confirme a senha' password />

      <View style={{ marginTop: 24 }}>
        <Button text='Próximo passo' />
      </View>
    </View>
  )
}
