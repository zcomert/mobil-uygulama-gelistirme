import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import CategoryHeader from '../categories/CategoryHeader'
import speakersdata from './eventdata'

const Events = () =>
{
    const renderItem = ({ item }) => (<View stlye={styles.speaker}>
        <Image
            style={styles.cover}
            source={{ uri: item?.src }} />
    </View>)

    return (
        <View>
            <View>
                <CategoryHeader name="Konuşmacılar" icon="list" />
            </View>
            <View style={styles.container} >
                <FlatList
                    horizontal
                    data={speakersdata}
                    renderItem={renderItem} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 32
    },
    speaker: {

    },
    cover: {
        width: 140,
        height: 140,
        margin: 16,
        borderRadius: 25,
    }
})
export default Events