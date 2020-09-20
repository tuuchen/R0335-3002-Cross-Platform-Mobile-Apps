import * as React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'
import page from '../styles/page.style'
import text from '../styles/text.style'

export default {
  Page: ({ route, navigation }) => {
    const { safeArea, container, view } = page
    const { about, navigate, link } = text

    return (
      <SafeAreaView style={safeArea}>
        <View style={container}>
          <View style={view}>
            <Text style={about}>
              This is Third Page of the App {'\n'} {route.params.someParam}
            </Text>
            {route.params.someParam != 'reset' ? (
              <Button title="Go back" onPress={() => navigation.goBack()} />
            ) : null}
            <Button
              onPress={() => navigation.navigate('SecondPage')}
              title="Go to Second Page"
            />
            <Button
              title="Reset navigator to First Page"
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'FirstPage',
                      params: { someParam: 'reset' },
                    },
                  ],
                })
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
  },
  options: {
    title: 'Third Page', //Set Header Title
    headerStyle: {
      backgroundColor: '#f4511e', //Set Header color
    },
    headerTintColor: '#fff', //Set Header text color
    headerTitleStyle: {
      fontWeight: 'bold', //Set Header text style
    },
  },
}
