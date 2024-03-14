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
        <View style={styles.box3}>
            <Text>3</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    borderWidth:5,
    borderColor:'black'
  },
  box1:{
    flex:1,
    backgroundColor:'darkorange',
    justifyContent:'center',
    alignItems:'center'
  },
  box2:{
    flex:3,
    justifyContent:'flex-start',
    backgroundColor:'green'
  },
  box3:{
    flex:2,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    backgroundColor:'red'
  },
})

export default App