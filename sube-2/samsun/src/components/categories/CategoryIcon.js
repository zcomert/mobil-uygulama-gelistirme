import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../constants/colors";

const CategoryIcon = ({ name, icon }) => {
  return (
    <View style={styles.outContainer}>
      <View style={styles.contanier}>
        <View style={styles.icon}>
          <FontAwesome5 name={icon} size={24} color={Colors.white} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  outContainer: {
    justifyContent: "flex-start",
    alignItems:'center',
    // borderWidth:1,
    width:75,
    marginHorizontal:5,
  },
  contanier: {
    padding: 5,
    margin: 5,
    backgroundColor: Colors.primary500,
    borderRadius:100
  },
  icon: {},
  textContainer: {
    flexWrap:'wrap'
  },
  text: {
    fontSize: 8,
  },
});

export default CategoryIcon;
