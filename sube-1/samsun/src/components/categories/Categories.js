import { View, Text, FlatList } from "react-native";
import React from "react";
import CategoryHeader from "./CategoryHeader";
import categories from "./categoryData";
import CategoryIcon from "./CategoryIcon";
const Categories = () => {
  const renderItem = ({ item }) => (
    <View>
      <CategoryIcon icon={item?.icon} name={item?.categoryName} />
    </View>
  );

  return (
    <View>
      <CategoryHeader name="Kategoriler" />
     
        <FlatList
            horizontal={false}
            numColumns={3}
            keyExtractor={(item) => item.categoryId}
            renderItem={renderItem}
            data={categories}
        />
      
    </View>
  );
};

export default Categories;
