import axios from 'axios';
import { endpointsCoronaVale } from '../../shared/global';

export default async function getTopNewsBr(c) {
    const city = c;
    const format = 'json';
    const is_last = 'True';
    try {
        const {
            host,
            routes: { cities },
        } = endpointsCoronaVale;
        const response = await axios.get(`${host}${cities}`, {
            params: {
                city,
                format,
                is_last,
            },
        });
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
