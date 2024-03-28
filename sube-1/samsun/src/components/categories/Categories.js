import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import CategoryHeader from "./CategoryHeader";
import categories from "./categoryData";
import CategoryIcon from "./CategoryIcon";

const Categories = () => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <CategoryIcon name={item?.categoryName} icon={item?.icon} />
      </View>
    );
  };

  return (
    <View>
      <CategoryHeader name="Kategoriler" />
      <View style={styles.listContainer} >
        <FlatList 
            numColumns={3} 
            data={categories} 
            renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer:{
    paddingHorizontal:9,
    
  }
})

export default Categories;
