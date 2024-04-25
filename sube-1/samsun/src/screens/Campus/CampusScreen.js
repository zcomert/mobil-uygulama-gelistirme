import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useRef } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { INITAL_REGION, SamsunUniversity } from './locations'

const CampusScreen = ({navigation}) => {

    const mapRef = useRef();

    const handleRegionChange = (region) => {
        console.log(region)
    }

    const callCenter = () => {
        mapRef
        .current
        .animateCamera({
            center:SamsunUniversity,
            zoom:15
        },
        {
            duration:3000
        })
        // .animateToRegion(SamsunUniversity)
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title:"Yerleşkeler",
            headerRight: () => (
                <TouchableOpacity onPress={callCenter} >
                    <Text>Merkez</Text>
                </TouchableOpacity>
            )
        })
    })

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={INITAL_REGION}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                showsMyLocationButton
                ref={mapRef}
                // onRegionChange={(region)=> handleRegionChange(region)}
                onRegionChangeComplete={(region)=> handleRegionChange(region)}
                style={styles.map} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: '100%',
        height: '100%',
    },
})

export default CampusScreen