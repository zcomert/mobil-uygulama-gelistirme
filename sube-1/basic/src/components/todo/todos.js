import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import Colors from "./colors";

const Todos = ({ todos, handleLongPress }) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable onLongPress={() => handleLongPress(item)}>
        <View style={styles.todoItem}>
          <Text>{item}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.todoContainer}>
      <FlatList data={todos} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flex: 0.4,
    backgroundColor: Colors.secondary500,
  },
  todoItem: {
    margin: 8,
    padding: 8,
    borderWidth: 1,
    backgroundColor: Colors.white,
    fontSize: 24,
  },
});

export default Todos;
