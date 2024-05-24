import { View, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import NewsService from '../../services/NewsService';
import FlatItem from './FlatItem'; // FlatItem bileşenini import ediyoruz

const NewsScreen = () =>
{
    const renderItem = ({ item }) =>
    {
        return <FlatItem title={item?.title} publishedAt={item?.publishedAt} />;
    };

    const [articles, setArticles] = useState([]);

    useEffect(() =>
    {
        const newsService = new NewsService();
        newsService
            .getNews()
            .then(resp =>
            {
                setArticles(resp.articles);
                console.log(resp.status);
            });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
});

export default NewsScreen;
