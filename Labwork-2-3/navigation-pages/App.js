import 'react-native-gesture-handler'

import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { FirstPage, firstPageOptions } from './pages/FirstPage'
import { SecondPage, secondPageOptions } from './pages/SecondPage'
import { ThirdPage, thirdPageOptions } from './pages/ThirdPage'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={firstPageOptions}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={secondPageOptions}
        />
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={thirdPageOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
