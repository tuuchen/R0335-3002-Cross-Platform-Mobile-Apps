import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";

import { Image, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const HamburgerMenu = (props) => {
  return (
    <TouchableOpacity onPress={() => props.openDrawer()}>
      <Image
        source={require("../assets/drawer.png")}
        style={{
          marginLeft: 10,
          width: 45,
          height: 45,
          tintColor: "#1F73BD",
        }}
      />
    </TouchableOpacity>
  );
};

const HomeStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: (props) => <HamburgerMenu {...navigation} />,
        }}
      />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerLeft: (props) => <HamburgerMenu {...navigation} />,
        }}
      />
    </Stack.Navigator>
  );
};

export { HomeStackNavigator, ContactStackNavigator };
