import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { INITAL_REGION } from './locations'

const CampusScreen = () => {
    return (
        <View style={styles.container}>
            <MapView
                initialRegion={INITAL_REGION}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                showsMyLocationButton
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