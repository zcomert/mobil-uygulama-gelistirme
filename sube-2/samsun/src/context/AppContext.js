import { createContext, useEffect, useState } from "react";
import NewsService from '../services/NewsService'
import speakersdata from "../components/events/eventdata"

const AppContext = createContext();

export const AppProvider = ({ children }) =>
{
    const [ids, setIds] = useState([]);

    const addFav = (id) =>
    {
        if (ids.length < 5)
        {
            setIds([...ids, id]);
        } else
        {
            console.log("Cannot add more than 5 favorite items");
        }
    }

    const removeFav = (id) =>
    {
        setIds([...ids.filter(item => item !== id)])
    }

    const [articles, setArticles] = useState([]);
    const [selectedArticles, setSelectedArticles] = useState([]);


    const searchArticles = (key) =>
    {
        if (!key) return articles;
        setSelectedArticles([...articles.filter(article =>
            (article.title && article.title.toLowerCase().includes(key.toLowerCase())) ||
            (article.description && article.description.toLowerCase().includes(key.toLowerCase()))
        )]);
    }

    useEffect(() =>
    {
        const newsService = new NewsService();
        newsService
            .getNews()
            .then(resp =>
            {
                setArticles(resp.articles);
            });
    }, []);

    const values = {
        ids: ids,
        addFav: addFav,
        removeFav: removeFav,
        articles,
        setArticles,
        searchArticles,
        selectedArticles,
        speakersdata
    }

    return (<AppContext.Provider value={values} >{children}</AppContext.Provider>)
}

export default AppContext;
