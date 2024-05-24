import axios from "axios";

class NewsService {
    constructor() {
        this.baseUrl = 'https://newsapi.org/v2/top-headlines?country=tr&apiKey=5c617db386d247769e86199f92e57058';
    }

    async getNews() {
        const { data } = await axios.get(this.baseUrl);
        return data;
    }
}

export default NewsService;