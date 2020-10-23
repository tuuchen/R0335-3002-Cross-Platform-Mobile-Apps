import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import { firebase } from './src/firebase/config'
import { decode, encode } from 'base-64'

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

const Stack = createStackNavigator()

function App() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  const handleAuthChange = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoading(true)
        setUser(null)
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
    })
  }

  useEffect(() => {
    handleAuthChange()
  }, [])

  if (loading) {
    return <></>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user && (
          <Stack.Screen
            name="Home"
            options={{
              headerLeft: () => {
                return null
              },
            }}
          >
            {(props) => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        )}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
