import React from "react";
import { firebase } from '../firebase/config'
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import styles from "../styles/aboutStyles"

const About = () => {

  return (
    <View style={styles.center}>
      <Text>This is the about screen</Text>
    </View>
  );
};

export default About;
