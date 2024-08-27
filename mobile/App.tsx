import React from "react";
import { StatusBar } from 'expo-status-bar';

import { Text, View } from 'react-native';
import { Button } from "./src/components/Button";

export default function App() {
  return (
    <View style={{ width: "100%" }}>
      <StatusBar style='dark' />
      <Text>!</Text>

      <Button text="Acessar" />
    </View>
  );
}
