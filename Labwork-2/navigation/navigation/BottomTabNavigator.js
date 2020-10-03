import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, ContactStackNavigator } from "./StackNavigator";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Icons = (props) => {
  let icon;

  if (props.name === "Home") {
    icon = props.focused
      ? "ios-information-circle"
      : "ios-information-circle-outline";
  }

  if (props.name === "Contact") {
    icon = props.focused ? "ios-list-box" : "ios-list";
  }

  return <Ionicons name={icon} size={props.size} color={props.color} />;
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={(props) => ({
        tabBarIcon: (options) => {
          const newProps = { ...props.route, ...options };
          return <Icons {...newProps} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#9AC4F8",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
