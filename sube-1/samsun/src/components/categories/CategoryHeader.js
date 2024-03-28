import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const CategoryHeader = ({ name }) => {
  return (
    <View style={styles.categoryHeaderContainer}>
      <View style={styles.categoryText}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.categoryIcon}>
        <FontAwesome name="list" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryHeaderContainer: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  categoryText:{

  },
  categoryIcon:{

  },
  text:{

  }
});

export default CategoryHeader;
