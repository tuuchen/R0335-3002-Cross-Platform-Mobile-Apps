import React, { useEffect, useState, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import DrawerNavigator from './navigation/DrawerNavigator'
import { firebase } from './firebase/config'
import { decode, encode } from 'base-64'

import LoginScreen from './screens/Login'
import RegistrationScreen from './screens/Register'

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

const Stack = createStackNavigator()

const App = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  const logOut = () => {
    setLoading(true)
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null)
      })
      .catch((error) => alert(error))
      .finally(() => setLoading(false))
  }

  const handleAuthChange = () => {
    setLoading(true)
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoading(false)
        return
      }
      setUserData(user)
    })
  }

  const setUserData = (user) => {
    setLoading(true)
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((document) => {
        let userData = document.data()
        if (!userData) {
          userData = {
            email: user.email,
            fullName: user.displayName,
            id: user.uid,
          }
        }
        setUser(userData)
      })
      .catch((error) => {
        alert(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    handleAuthChange()
  }, [])

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user && (
          <Stack.Screen name="Main">
            {(props) => <DrawerNavigator {...props} logOut={logOut} />}
          </Stack.Screen>
        )}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
