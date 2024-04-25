import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import MapView from "react-native-maps";
import { INITAL_REGION } from "./locations";

const CampusScreen = ({navigation}) => {

    useLayoutEffect(() => {});

  const { container, map } = styles;
  return (
    <View style={container}>
      <MapView 
      showsUserLocation
      showsMyLocationButton
      initialRegion={INITAL_REGION}
      style={map} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default CampusScreen;
