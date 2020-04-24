import axios from 'axios';
import { endpointsNews } from '../../shared/global';

export default async function getTopNewsBr() {
    const apiKey = '693d7fef99a2444c9aff590e9f9ee574';
    const qinTitle = 'covid';
    const domains = 'terra.com.br,globo.com';
    const pageSize = '10';
    const sortBy = 'publishedAt';
    try {
        const {
            host,
            routes: { topCoronaNewsBr },
        } = endpointsNews;
        const response = await axios.get(`${host}${topCoronaNewsBr}`, {
            params: {
                qinTitle,
                apiKey,
                pageSize,
                domains,
                sortBy,
            },
        });
        return response.data.articles;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
