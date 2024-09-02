import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";

export function Login() {
  return (
    <View style={styles.container}>
      <Header text="Acesse sua conta" />
    </View>
  )
}
