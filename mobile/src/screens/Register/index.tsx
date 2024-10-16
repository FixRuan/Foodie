import { TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import { styles } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function Register({ navigation }: any) {
  function nextStep() {
    navigation.navigate('nextStep')
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back-outline' size={32} color={'#5D6275'} />
        </TouchableOpacity>

        <Header text='Informe seu endereço' />
      </View>

      <Input label='Nome Completo' />
      <Input label='E-mail' />
      <Input label='Escolha uma senha' password />
      <Input label='Confirme a senha' password />

      <View style={{ marginTop: 24 }}>
        <Button text='Próximo passo' onPress={nextStep} />
      </View>
    </View>
  )
}
