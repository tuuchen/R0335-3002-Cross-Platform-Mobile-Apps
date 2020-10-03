import * as React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'
import page from '../styles/page.style'
import text from '../styles/text.style'

const SecondPage = ({ navigation }) => {
  const { safeArea, container, view } = page
  const { about, navigate, link } = text

  return (
    <SafeAreaView style={safeArea}>
      <View style={container}>
        <View style={view}>
          <Text style={about}>This is Second Page of the App</Text>
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button
            title="Go to SecondPage... again"
            onPress={() => navigation.push('SecondPage')}
          />
          <Button
            title="Replace this screen with Third Page"
            onPress={() =>
              navigation.replace('ThirdPage', {
                someParam: 'Param',
              })
            }
          />
          <Button
            title="Reset navigator state to Third Page"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'ThirdPage',
                    params: { someParam: 'reset' },
                  },
                ],
              })
            }
          />
          <Button
            title="Go to First Page"
            onPress={() => navigation.navigate('FirstPage')}
          />
          <Button
            title="Go to Third Page"
            onPress={() =>
              navigation.navigate('ThirdPage', { someParam: 'Param1' })
            }
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

const secondPageOptions = {
  title: 'Second Page', //Set Header Title
  headerStyle: {
    backgroundColor: '#f4511e', //Set Header color
  },
  headerTintColor: '#fff', //Set Header text color
  headerTitleStyle: {
    fontWeight: 'bold', //Set Header text style
  },
}

export { SecondPage, secondPageOptions }
