import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import NavigationDrawerStructure from '../components/NavigationDrawerStructure'
import BottomTabStack from './BottomStack'

const Stack = createStackNavigator()

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed'

  switch (routeName) {
    case 'HomeScreen':
      return 'Home'
    case 'ExploreScreen':
      return 'Explore'
    case 'BottomTabStack':
      return 'Home'
  }
}

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="BottomTabStack"
        component={BottomTabStack}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  )
}

export default HomeScreenStack
