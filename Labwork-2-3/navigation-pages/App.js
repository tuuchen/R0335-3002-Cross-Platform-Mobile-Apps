import 'react-native-gesture-handler'

import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage.Page}
          options={FirstPage.options}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage.Page}
          options={SecondPage.options}
        />
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage.Page}
          options={ThirdPage.options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
