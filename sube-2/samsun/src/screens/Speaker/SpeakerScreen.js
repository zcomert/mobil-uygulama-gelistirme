import { View, Text, StyleSheet, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import speakersdata from "../../components/events/eventdata";

const SpeakerScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight : () => (<Text>hey</Text>)
    });
  });

  const speaker = speakersdata.filter((i) => i.id === route?.params?.id)[0];

  return (
    <View style={styles.container}>
      <Image style={styles.cover} source={{ uri: speaker?.src }} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
export default SpeakerScreen;
