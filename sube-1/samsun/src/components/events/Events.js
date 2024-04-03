import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import CategoryHeader from "../categories/CategoryHeader";
import speakersdata from "./eventdata";

const Events = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.cover} source={{uri:item?.src}} />
    </View>
  );
  return (
    <View>
      <CategoryHeader name="Konuşmacılar" />
      <FlatList 
        horizontal
        renderItem={renderItem} 
        keyExtractor={(item) => item.src}
        data={speakersdata} />
    </View>
  );
};

const styles = StyleSheet.create({
    item:{},
    cover:{
        width:150,
        height:150,
        marginHorizontal:8,
        borderRadius:8,
    }
})


export default Events;
