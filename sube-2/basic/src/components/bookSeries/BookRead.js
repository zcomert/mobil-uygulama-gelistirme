import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Colors from "./colors";

const BookRead = ({finishedBooks, renderFinishedItem}) => {
  return (
    <View style={styles.readContainer}>
      <FlatList data={finishedBooks} renderItem={renderFinishedItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  readContainer: {
    flex: 0.4,
    backgroundColor: Colors.primary500,
  },
})


export default BookRead;
