import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const CategoryIcon = ({ name, icon }) => {
  return (
    <View style={styles.contanier}>
      <View style={styles.icon}>
        <FontAwesome5 name={icon} size={24} color="black" />
      </View>
      <View style={styles.text}>
        <Text>{name}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
  },
  icon: {},
  text: {},
});

export default CategoryIcon;
