import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import AppContext from '../../context/AppContext';

const FavoriteSpeaker = ({ navigation }) =>
{
    const { ids } = useContext(AppContext);

    useLayoutEffect(() =>
    {
        navigation.setOptions({
            title: `Favori Konuşmacılar (${ids.length})`
        })
    });

    return (
        <View style={styles.container}>
            <Text>
                {ids.length}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoriteSpeaker;