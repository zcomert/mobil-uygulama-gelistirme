import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';

const FavoriteSpeaker = () =>
{
    const { ids } = useContext(AppContext);
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