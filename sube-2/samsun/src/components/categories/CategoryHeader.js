import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const CategoryHeader = ({ name }) => {
  return (
    <View>
      <View>
        <Text>{name}</Text>
      </View>
      <View>
        <FontAwesome5 name="list" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CategoryHeader;
