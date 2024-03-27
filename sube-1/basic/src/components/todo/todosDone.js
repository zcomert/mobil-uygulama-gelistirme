import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import Colors from "./colors";

const TodosDone = ({ todosDone, handleRemove }) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable onLongPress={() => handleRemove(item)}>
        <View style={styles.todoDoneItem}>
          <Text>{item}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.doneContainer}>
      <FlatList data={todosDone} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  doneContainer: {
    flex: 0.4,
    backgroundColor: Colors.green200,
  },
  todoDoneItem: {
    margin: 8,
    padding: 8,
    borderWidth: 1,
    backgroundColor: Colors.white,
    fontSize: 24,
  },
});

/*const TodosDone = ({ todosDone, handleRemove }) => {
  return (
    <View style={styles.doneContainer}>
      {todosDone.map((item, index) => (
        <Pressable key={index} onLongPress={() => handleRemove(item)}>
          <View style={styles.todoDoneItem}>
            <Text>{item}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};*/
export default TodosDone;


