import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import speakersdata from '../../components/events/eventdata'


const SpeakerScreen = ({ route }) => {

    const current = speakersdata
        .filter(i => i.id === route?.params?.id)[0]

    return (
        <View style={styles.container}>
            <Image
                style={styles.cover}
                source={{ uri: current?.src }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cover: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
})

export default SpeakerScreen