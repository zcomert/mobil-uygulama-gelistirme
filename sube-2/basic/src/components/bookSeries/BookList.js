import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Colors from "./colors";

const BookList = ({books,bookRender}) => {
  return (
    <View style={styles.booksContainer}>
      <FlatList 
        data={books} 
        renderItem={bookRender} />
    </View>
  );
};

const styles = StyleSheet.create({
    booksContainer: {
        flex: 0.4,
        backgroundColor: Colors.secondary500,
      },
    
})


export default BookList;
