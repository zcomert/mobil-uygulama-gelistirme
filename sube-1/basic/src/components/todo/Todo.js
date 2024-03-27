import React, { useState } from "react";
import { View } from "react-native";
import Colors from "./colors";
import Todos from "./todos";
import TodosDone from "./todosDone";
import Ekle from "./Ekle";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("Örnek");
  const [todos, setTodos] = useState([]);
  const [todosDone, setTodosDone] = useState([]);

  const handleLongPress = (item) => {
    setTodosDone([...todosDone, item]);
    setTodos(todos.filter((i) => i !== item));
  };

  const handlePress = () => {
    setTodos([...todos, todoInput]);
  };

  const handleOnInputTextChange = (text) => {
    setTodoInput(text);
  };

  const handleRemove = (item) => {
    // Burada işlem yapabilirsiniz, şu an sadece bir uyarı gösteriliyor.
    Alert.alert(item);
  };

  return (
    <View style={{ flex: 1 }}>
      <Ekle
        todoInput={todoInput}
        handleOnInputTextChange={handleOnInputTextChange}
        handlePress={handlePress}
      />
      <Todos todos={todos} handleLongPress={handleLongPress} />
      <TodosDone todosDone={todosDone} handleRemove={handleRemove} />
    </View>
  );
};

export default Todo;