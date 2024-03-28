import { View, Text, FlatList } from "react-native";
import React from "react";
import CategoryHeader from "./CategoryHeader";
import categories from "./categoryData";
import CategoryIcon from "./CategoryIcon";

const Categories = () => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <CategoryIcon 
            name={item?.categoryName}
            icon={item?.icon} />
      </View>
    );
  };

  return (
    <View>
      <CategoryHeader name="Kategoriler" />
      <FlatList data={categories} renderItem={renderItem} />
    </View>
  );
};

export default Categories;
