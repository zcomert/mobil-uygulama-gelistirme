import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import categoryData from './categoryData'
import { render } from 'react-dom'
import Colors from '../../constants/colors'
import CategoryIcon from './CategoryIcon'

import CategoryHeader from './CategoryHeader'

const Categories = () =>
{
    const renderItem = ({ item }) => (

        <View style={styles.categoryItem} >
            <CategoryIcon icon={item?.icon} />
            <Text>{item?.categoryName}</Text>
        </View>
    )

    return (
        <View style={styles.categoryContainer}>
            <View>
                <CategoryHeader name="Kategoriler" icon="list" />
            </View>

            <View style={styles.categories}>
                <FlatList
                    horizontal={false}
                    data={categoryData}
                    renderItem={renderItem}
                    numColumns={3}
                    keyExtractor={(item) => item.categoryId.toString()}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        padding: 4,
        backgroundColor: Colors.white,
        // borderBottomWidth: 1,

    },
    categoryItem: {
        width: 120,
        textAlign: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },



    categories: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Categories