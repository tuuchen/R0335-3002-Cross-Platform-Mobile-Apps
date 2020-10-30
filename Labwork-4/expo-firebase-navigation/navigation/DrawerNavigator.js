import React from 'react'
import { firebase } from '../firebase/config'
import { Alert } from 'react-native'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'

import BottomTabNavigator from './BottomTabNavigator'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  const logOut = props.logOut
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Contact"
        onPress={() => props.navigation.navigate('Contact')}
      />
      <DrawerItem
        label="About"
        onPress={() => props.navigation.navigate('About')}
      />
      <DrawerItem
        label="Logout"
        onPress={() => {
          Alert.alert(
            'Confirm',
            'Log out?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Canel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  logOut()
                  props.navigation.replace('Login')
                },
              },
            ],
            { cancelable: false }
          )
        }}
      />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = ({ logOut }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} logOut={logOut} />
      )}
    >
      <Drawer.Screen name="Menu" component={BottomTabNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
