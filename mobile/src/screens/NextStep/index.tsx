import { TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import { styles } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function NextStep({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back-outline' size={32} color={'#5D6275'} />
        </TouchableOpacity>

        <Header text='Informe seu endereço' />
      </View>

      <View style={styles.formHorizontal}>
        <View style={styles.form60}>
          <Input label='Endereço' />
        </View>

        <View style={styles.form40}>
          <Input label='Complemento' />
        </View>
      </View>

      <Input label='Bairro' />

      <View style={styles.formHorizontal}>
        <View style={styles.form60}>
          <Input label='Cidade' />
        </View>

        <View style={styles.form40}>
          <Input label='UF' />
        </View>
      </View>

      <Input label='CEP' />

      <View style={{ marginTop: 24 }}>
        <Button text='Criar Minha Conta' />
      </View>
    </View>
  )
}
