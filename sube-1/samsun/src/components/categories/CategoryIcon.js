import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../constants/colors";

const CategoryIcon = ({ icon, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <FontAwesome5 name={icon} size={24} color={Colors.white} />
      </View>
        <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center'
  },
  item: {
        backgroundColor:Colors.primary500,
        margin:8,
        padding:8,
        borderRadius:100, 
  },
});

export default CategoryIcon;
