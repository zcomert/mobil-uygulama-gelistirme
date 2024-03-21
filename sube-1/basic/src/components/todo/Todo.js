import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Colors from "./colors";
import { ScrollView } from "react-native-web";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("Örnek");

  // yapılacak
  const [todos, setTodos] = useState([]);

  // yapılanlar
  const [todosDone, setTodosDone] = useState([]);

  const handleLongPress = (item) => {
    // yapılanlar listesine eklemeyi yap.
    setTodosDone([...todosDone, item]);

    // yapılacaklar listesinden kaldırma işlemi
    setTodos(todos.filter((i) => i !== item));
  };

  const handlePress = () => {
    setTodos([...todos, todoInput]);
  };

  const handleOnInputTextChange = (text) => {
    setTodoInput(text);
  };

  const handleRemove = (item) => {
    Alert.alert(item)
  }

  const renderItem = ({ item }) => {
    return (
      <Pressable onLongPress={() => handleRemove(item)}>
        <View style={styles.todoDoneItem}>
          <Text>{item}</Text>
        </View>
      </Pressable>
    );
  };

  const renderTodos = ({ item }) => {
    return (
      <Pressable onLongPress={() => handleLongPress(item)}>
        <View style={styles.todoItem}>
          <Text>{item}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputTitleContainer}>
          <Text style={styles.inputTitle}>Yapılacaklar</Text>
        </View>
        <View style={styles.formControl}>
          <View style={{ flex: 0.8 }}>
            <TextInput
              value={todoInput}
              onChangeText={handleOnInputTextChange}
              style={styles.inputText}
            />
          </View>
          <View style={{ flex: 0.2 }}>
            <Button title="Ekle" onPress={handlePress} />
          </View>
        </View>
      </View>
      <View style={styles.todoContainer}>
        <FlatList data={todos} renderItem={renderTodos} />
      </View>
      <View style={styles.doneContainer}>
        <FlatList data={todosDone} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.2,
    padding: 30,
    backgroundColor: Colors.primary500,
  },
  inputTitleContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputTitle: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: "bold",
  },
  formControl: {
    flex: 1,
    flexDirection: "row",
  },
  inputText: {
    backgroundColor: Colors.white,
    fontSize: 18,
    padding: 5,
  },
  button: {},
  todoContainer: {
    flex: 0.4,
    backgroundColor: Colors.secondary500,
  },
  doneContainer: {
    flex: 0.4,
    backgroundColor: Colors.green200,
  },
  todoDoneItem: {
    margin: 8,
    padding: 8,
    borderWidth: Colors.primary500,
    backgroundColor: Colors.white,
    fontSize: 24,
  },
  todoItem: {
    margin: 8,
    padding: 8,
    borderWidth: Colors.primary500,
    backgroundColor: Colors.white,
    fontSize: 24,
  },
});

export default Todo;
