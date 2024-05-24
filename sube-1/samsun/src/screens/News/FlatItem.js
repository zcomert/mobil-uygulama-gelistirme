import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlatItem = ({ title, publishedAt }) =>
{
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{new Date(publishedAt).toLocaleDateString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    date: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});

export default FlatItem;
