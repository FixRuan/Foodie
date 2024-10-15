import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from './screens/Login'
import { Register } from './screens/Register'
import { NextStep } from './screens/NextStep'

const { Screen, Navigator } = createNativeStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='login' component={Login} />
        <Screen name='register' component={Register} />
        <Screen name='nextStep' component={NextStep} />
      </Navigator>
    </NavigationContainer>
  )
}

export { Routes }
