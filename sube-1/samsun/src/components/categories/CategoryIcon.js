import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../constants/colors";

const windowWidth = Dimensions.get('window').width;
const iconSize = windowWidth / 8; // İkon boyutu burada ayarlanıyor, istediğiniz değeri verebilirsiniz.

const CategoryIcon = ({ name, icon }) =>
{
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome5 name={icon} size={iconSize} color={Colors.white} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: windowWidth / 3 - 10, // İkonlar arasındaki boşluğu ayarlayabilirsiniz.
    aspectRatio: 1, // Kare şeklindeki kutuları sağlar
  },
  icon: {
    backgroundColor: Colors.primary500,
    borderRadius: iconSize / 2, // Kare içindeki yuvarlaklık
    alignItems: 'center',
    justifyContent: 'center',
    width: iconSize + 20,
    height: iconSize + 20,
    marginBottom: 5, // İkon altındaki boşluğu ayarlar
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  }
});

export default CategoryIcon;
