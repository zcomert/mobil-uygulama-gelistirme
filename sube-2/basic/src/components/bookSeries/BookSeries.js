import { View, Text, StyleSheet, ScrollView, Button, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Colors from "./colors";

const BookSeries = () => {

  const [book, setBook] = useState('Örnek kitap');
  const [books, setBooks] = useState([]); 
  const [finishedBooks, setFinishedBooks] = useState([]); 

  const handleLongPress = (item) => {
    setFinishedBooks([...finishedBooks, item])
    setBooks(books.filter(b => b!==item))
  }

  const handlePress = ()=>{
    setBooks([...books, book])
  }

  const handleOnTextChange = (text) =>{
    setBook(text);
  }

  const handleRemove = (item) => {
    setFinishedBooks(finishedBooks.filter(i => i!==item))
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Kitap</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.textInputContainer}>
            <TextInput 
              value={book}
              onChangeText={handleOnTextChange}
              style={styles.input} />
          </View>
          <View style={styles.buttonContainer}>
            <Button 
            onPress={handlePress}
            title="Ekle" />
          </View>
        </View>
      </View>

      <View style={styles.booksContainer}>
        <ScrollView>
        {books.map((item,index) => {
          return(
            <View style={styles.book} key={index}>
              <Pressable onLongPress={() => handleLongPress(item)} >
              <Text>{index} {item}</Text>
              </Pressable>
            </View>
          )
        })}
        </ScrollView>
      </View>
      <View style={styles.readContainer}>
      <ScrollView>
        {finishedBooks.map((item,index) => {
          return(
            <View style={styles.finishedbook} key={index}>
              <Pressable onLongPress={() => handleRemove(item)} >
              <Text>{index} {item}</Text>
              </Pressable>
            </View>
          )
        })}
        </ScrollView>
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
    flexDirection: "row"
  },
  textInputContainer:{
    flex:.8
  },
  buttonContainer:{
    flex:.2
  },
  input: {
    backgroundColor: Colors.white,
  },
  booksContainer: {
    flex: 0.4,
    backgroundColor: Colors.secondary500,
  },

  book:{
    margin:15,
    padding:15,
    backgroundColor:Colors.primary500,
    borderColor:Colors.primary500,
    borderWidth:1
  },
  finishedbook:{
    margin:15,
    padding:15,
    backgroundColor:Colors.secondary500,
    borderColor:Colors.secondary500,
    borderWidth:1
  },
  readContainer: {
    flex: 0.4,
    backgroundColor: Colors.primary500,
  },
});

export default BookSeries;
