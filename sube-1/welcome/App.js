import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>1</Text>
      </View>
      <View style={styles.box2}>
        <Text>2</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  box1:{
    backgroundColor:'green',
    flex:1,
},
box2:{
      backgroundColor:'darkorange',
      flex:1,
  }
})


export default App