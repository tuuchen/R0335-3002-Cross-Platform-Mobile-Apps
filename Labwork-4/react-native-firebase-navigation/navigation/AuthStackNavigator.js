import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import {GoogleSignin} from '@react-native-community/google-signin';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  useEffect(() => {
    // initialize the Google SDK
    GoogleSignin.configure({
      webClientId:
        '1095147834523-8f0u34spc2vrc7olqekpuicqhtq3qasm.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
