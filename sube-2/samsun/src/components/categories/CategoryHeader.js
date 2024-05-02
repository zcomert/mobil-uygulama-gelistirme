import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from '../../constants/colors'
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryHeader = ({ name, press }) =>
{
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigation.navigate(press)} >
          <FontAwesome5 name="list" size={24} color={Colors.primary500} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginVertical: 8
  },
  name: {},
  icon: {},
  text: { fontSize: 20 }
});

export default CategoryHeader;
