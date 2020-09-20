import 'react-native-gesture-handler'

import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreenStack from './components/HomeScreenStack'
import SettingScreenStack from './components/SettingScreenStack'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen
          name="HomeScreenStack"
          options={{ drawerLabel: 'Home Screen Option' }}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="SettingScreenStack"
          options={{ drawerLabel: 'Setting Screen Option' }}
          component={SettingScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
