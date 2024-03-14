import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native-web";

function TimeWidget() {
  const currentTime = new Date();

  return (
    <ImageBackground style={styles.container}
        source={{uri:'https://wallpapers.com/images/hd/night-sky-stars-wallpaper-p5z3udhw7tqhp3bl.jpg'}}
        resizeMode="cover"
        imageStyle={styles.image}
    >
      <View>
        <Text style={styles.time}>
          {currentTime.getHours()} :{" "}
          {currentTime.getMinutes().toString().padStart(2, "0")}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  time: {
    color: "white",
    fontSize: 60,
    fontWeight:'bold'
  },
  image:{
    opacity: .5
  }
});

export default TimeWidget;
