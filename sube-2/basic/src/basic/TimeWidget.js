import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const TimeWidget = () => {

    const currentTime = new Date();
    
    return (
        <ImageBackground 
          source={{uri:'https://i.pinimg.com/736x/a6/f3/20/a6f320de23ad2ccd5047e441a61da53c.jpg'}}
          resizeMode="cover"
          imageStyle={{
            opacity:.9
          }}
          style={styles.container}>
          <View>
            <Text style={styles.text}>
              {currentTime.getHours()} :{" "}
              {String(currentTime.getMinutes()).padStart(2, "0")}
            </Text>
          </View>
        </ImageBackground>
        
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      text: {
        fontSize: 60,
        fontWeight: "bold",
        color:'white'
      },
    });

export default TimeWidget