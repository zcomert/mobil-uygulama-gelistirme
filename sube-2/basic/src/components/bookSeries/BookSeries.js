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

  const renderFinishedItem = ({ item }) => (
    <View style={styles.finishedbook}>
      <Pressable onLongPress={() => handleRemove(item)}>
        <Text>
          {item}
        </Text>
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
      

      <View style={styles.booksContainer}>
        <ScrollView>
          {books.map((item, index) => {
            return (
              <View style={styles.book} key={index}>
                <Pressable onLongPress={() => handleLongPress(item)}>
                  <Text>
                    {index} {item}
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.readContainer}>
        <FlatList data={finishedBooks} renderItem={renderFinishedItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  booksContainer: {
    flex: 0.4,
    backgroundColor: Colors.secondary500,
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
  readContainer: {
    flex: 0.4,
    backgroundColor: Colors.primary500,
  },
});

export default BookSeries;
