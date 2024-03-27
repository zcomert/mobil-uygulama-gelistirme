import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Colors from "./colors";

const Ekle = ({ todoInput, handleOnInputTextChange, handlePress }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
});

export default Ekle;
