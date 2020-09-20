import * as React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'
import page from '../styles/page.style'
import text from '../styles/text.style'

const FirstPage = ({ navigation }) => {
  const { safeArea, container, view } = page
  const { about, navigate, link } = text

  return (
    <SafeAreaView style={safeArea}>
      <View style={container}>
        <View style={view}>
          <Text style={about}>This is the First Page of the app</Text>
          <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Go to Second Page"
          />
        </View>
        <Text style={navigate}>
          Navigate Between Screens using{'\n'}React Navigation
        </Text>
        <Text style={link}>www.aboutreact.com</Text>
      </View>
    </SafeAreaView>
  )
}

const firstPageOptions = {
  title: 'First Page', //Set Header Title
  headerStyle: {
    backgroundColor: '#f4511e', //Set Header color
  },
  headerTintColor: '#fff', //Set Header text color
  headerTitleStyle: {
    fontWeight: 'bold', //Set Header text style
  },
}

export { FirstPage, firstPageOptions }
