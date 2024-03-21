import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React from 'react'
import Colors from './colors'

const BookAdd = ({handleOnTextChange,handlePress,book}) => {
  return (
    <View style={styles.inputContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Kitap</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.textInputContainer}>
            <TextInput
              value={book}
              onChangeText={handleOnTextChange}
              style={styles.input}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={handlePress} title="Ekle" />
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 0.2,
        backgroundColor: Colors.primary500,
      },
      titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      title: {
        color: Colors.white,
        fontSize: 32,
      },
      formContainer: {
        flexDirection: "row",
      },
      textInputContainer: {
        flex: 0.8,
      },
      buttonContainer: {
        flex: 0.2,
      },
      input: {
        backgroundColor: Colors.white,
      },
})


export default BookAdd;