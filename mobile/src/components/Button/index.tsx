import React from "react"
import { Text, TouchableOpacity } from "react-native"

import { styles } from "./styles"

interface ButtonInterface {
  text: string,
}

export function Button({ text }: ButtonInterface) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
