import React, {useContext} from 'react';
import {Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';

import {AuthContext} from '../navigation/AuthProvider';

import {Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const HamburgerMenu = (props) => {
  return (
    <TouchableOpacity onPress={() => props.openDrawer()}>
      <Image
        source={require('../assets/drawer.png')}
        style={{
          marginTop: 2,
          marginLeft: 10,
          width: 25,
          height: 25,
          tintColor: '#1F73BD',
        }}
      />
    </TouchableOpacity>
  );
};

const LogOutButton = () => {
  const {user, logout} = useContext(AuthContext);

  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert(
          'Confirm',
          'Log out?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => {
                logout();
              },
            },
          ],
          {cancelable: false},
        );
      }}>
      <Icon name="log-out-outline" size={30} />
    </TouchableOpacity>
  );
};

const HomeStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: (props) => <HamburgerMenu {...navigation} />,
          headerRight: (props) => <LogOutButton {...navigation} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerLeft: (props) => <HamburgerMenu {...navigation} />,
          headerRight: (props) => <LogOutButton {...navigation} />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export {HomeStackNavigator, ContactStackNavigator};
