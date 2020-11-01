import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator, ContactStackNavigator} from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const Tab = createBottomTabNavigator();

const Icons = (props) => {
  let icon;

  if (props.name === 'Home') {
    icon = props.focused ? 'information-circle' : 'information-circle-outline';
  }

  if (props.name === 'Contact') {
    icon = props.focused ? 'list-outline' : 'list';
  }

  return <Icon name={icon} size={props.size} color={props.color} />;
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={(props) => ({
        tabBarIcon: (options) => {
          const newProps = {...props.route, ...options};
          return <Icons {...newProps} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#9AC4F8',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
