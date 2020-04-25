import axios from 'axios';
import { endpointsCoronaVale } from '../../shared/global';

export default async function getStateData(s) {
    const state = s;
    const format = 'json';
    const is_last = 'True';
    const place_type = 'state'
    try {
        const {
            host,
            routes: { cities },
        } = endpointsCoronaVale;
        const response = await axios.get(`${host}${cities}`, {
            params: {
                format,
                is_last,
                place_type,
                state
            },
        });
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
