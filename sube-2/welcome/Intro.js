import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Intro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Hello World.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkorange",
  },
  text: {
    color: "white",
    fontSize: 40
  },
});

export default Intro;
