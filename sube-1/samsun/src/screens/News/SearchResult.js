import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const SearchResult = () =>
{

    const { selectedArticles } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <FlatList
                data={selectedArticles}
                keyExtractor={(item) => item?.title}
                renderItem={({ item }) => (
                    <View style={styles.articleContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    articleContainer: {
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
    },
});

export default SearchResult;
