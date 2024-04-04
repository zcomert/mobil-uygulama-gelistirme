import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import CategoryHeader from "./CategoryHeader";
import categories from "./categoryData";
import CategoryIcon from "./CategoryIcon";
import { useNavigation } from "@react-navigation/native";
const Categories = () => {
  const navigation = useNavigation();
  
  const handlePress = (component) => {
    navigation.navigate(component)
    // console.log("handle press")
  }

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity
        activeOpacity={.1}
        onPress={() => handlePress(item?.component)}
      >
        <CategoryIcon icon={item?.icon} name={item?.categoryName} />
      </TouchableOpacity>
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
