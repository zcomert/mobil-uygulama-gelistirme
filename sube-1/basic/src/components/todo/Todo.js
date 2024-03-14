import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Colors from "./colors";

const Todo = () => {
  
  const [todoInput, setTodoInput] = useState("Örnek");
  const [todos, setTotos] = useState([]);

  const handlePress = () => {
    setTotos([...todos, todoInput])
  }

  const handleOnInputTextChange = (text) => {
    setTodoInput(text)
  }
  
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
            style={styles.inputText} />
          </View>
          <View style={{ flex: 0.2 }}>
            <Button 
                title="Ekle"
                onPress={handlePress}
            />
          </View>
        </View>
      </View>
      <View style={styles.todoContainer}>
            
            {todos.map((item) => (
            <View>
            <Text>{item}</Text>
            </View>)
            )}

      </View>
      <View style={styles.doneContainer}>
        <Text>Done list</Text>
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
});

export default Todo;
