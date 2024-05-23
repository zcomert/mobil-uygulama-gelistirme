import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import NewsService from '../../services/NewsService';

const NewsScreen = () => {
    const renderItem = ({ item }) => {
        return <View>
            <Text>{item?.title}</Text>
            <Text>{new Date(item?.publishedAt).toLocaleDateString()}</Text>
        </View>
    }

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const newsService = new NewsService();
        newsService
            .getNews()
            .then(resp => {
                setArticles(resp.articles);
                console.log(resp.status)
            })
    }, []);

    return (
        <View>
            <FlatList
                data={articles}
                renderItem={renderItem}
            />
        </View>
    )
}

export default NewsScreen