import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/colors';

const Profile = () =>
{
    return (
        <View style={styles.container}>
            <View style={styles.col1}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://pbs.twimg.com/profile_images/1454559498971058177/tC-prr3a_200x200.jpg' }} />
            </View>
            <View style={styles.col2}>
                <View>
                    <Text style={[styles.text, styles.weight]}>Hoş geldiniz!</Text>
                    <Text style={styles.text}>Zafer Cömert</Text>
                </View>
            </View>
            <View style={styles.col3}>
                <Ionicons name="notifications" size={24} color={Colors.white} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 32,

    },
    col1: {
        flex: .2
    },
    col2: {
        flex: .7,
        justifyContent: 'space-evenly'
    },
    col3: {
        flex: .1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 100
    },
    text: {
        color: Colors.white,
        fontSize: 16,
    },
    weight: {
        fontWeight: 'bold'
    }
})

export default Profile