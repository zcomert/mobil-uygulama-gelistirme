import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Colors from "./colors";
import BookAdd from "./BookAdd";
import BookList from "./BookList";
import BookRead from "./BookRead";

const BookSeries = () => {
  const [book, setBook] = useState("Örnek kitap");
  const [books, setBooks] = useState([]);
  const [finishedBooks, setFinishedBooks] = useState([]);

  const handleLongPress = (item) => {
    setFinishedBooks([...finishedBooks, item]);
    setBooks(books.filter((b) => b !== item));
  };

  const handlePress = () => {
    setBooks([...books, book]);
  };

  const handleOnTextChange = (text) => {
    setBook(text);
  };

  const handleRemove = (item) => {
    setFinishedBooks(finishedBooks.filter((i) => i !== item));
  };

  const bookRender = ({ item }) => (
    <View style={styles.book}>
      <Pressable onLongPress={() => handleLongPress(item)}>
        <Text>{item}</Text>
      </Pressable>
    </View>
  );

  const renderFinishedItem = ({ item }) => (
    <View style={styles.finishedbook}>
      <Pressable onLongPress={() => handleRemove(item)}>
        <Text>{item}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <BookAdd
        book={book}
        handlePress={handlePress}
        handleOnTextChange={handleOnTextChange}
      />

      <BookList books={books} bookRender={bookRender} />

      <BookRead 
        renderFinishedItem={renderFinishedItem}
        finishedBooks={finishedBooks} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  
  book: {
    margin: 15,
    padding: 15,
    backgroundColor: Colors.primary500,
    borderColor: Colors.primary500,
    borderWidth: 1,
  },

  finishedbook: {
    margin: 15,
    padding: 15,
    backgroundColor: Colors.secondary500,
    borderColor: Colors.secondary500,
    borderWidth: 1,
  },
  
});

export default BookSeries;
