import { Image, Text, View } from 'react-native'

import { styles } from './styles'
import { logo } from '../../constants/icons'

interface HeaderInterface {
  text: string
}

export function Header({ text }: HeaderInterface) {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.title}>{text}</Text>
    </View>
  )
}
