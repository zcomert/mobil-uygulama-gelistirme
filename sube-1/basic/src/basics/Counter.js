import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  const handleDecrease = () => {
    setNumber(number - 1);
  };

  const handleReset = () => {
    setNumber(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{number}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Artır" onPress={handleIncrease} />
        <Button title="Azalt" onPress={handleDecrease} />
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  numberContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    // borderWidth:1,
  },
  number: {
    fontSize: 60,
  },
  buttonsContainer: {
   
    justifyContent: "space-between",

    flexDirection: "row",
  },
});

export default Counter;
