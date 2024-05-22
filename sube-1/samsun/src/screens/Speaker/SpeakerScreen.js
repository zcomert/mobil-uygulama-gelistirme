import { View, Text, StyleSheet, Image } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import speakersdata from "../../components/events/eventdata";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import AppContext from "../../context/AppContext";

const SpeakerScreen = ({ navigation, route }) => {

    const {ids, addFav, removeFav} = useContext(AppContext);
    const id = route.params.id;
    const isFav = ids.includes(id);
    console.log(isFav)
    // console.log(id)

    const handlePress = (id) => {
        if(isFav){
            removeFav(id);
        }
        else{
            addFav(id)
        }
        // console.log(ids)
    }

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight : () => (
        <TouchableOpacity onPress={() => handlePress(id)} >
            <MaterialIcons 
                name={isFav ? "favorite" : "favorite-border"} 
                size={24} 
                color={isFav ? "red" :"black"} />
        </TouchableOpacity>
        )
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
