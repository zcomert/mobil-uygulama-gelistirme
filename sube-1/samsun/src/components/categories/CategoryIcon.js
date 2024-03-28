import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../constants/colors";

const CategoryIcon = ({ icon, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <FontAwesome5 name={icon} size={18} color={Colors.white} />
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    width:75,
    height:75,
  },
  item: {
        flexWrap:'wrap',
        backgroundColor:Colors.primary500,
        padding:8,
        borderRadius:100, 
  },
  text:{
    fontSize:8,
    textAlign:'center'
  }
});

export default CategoryIcon;
