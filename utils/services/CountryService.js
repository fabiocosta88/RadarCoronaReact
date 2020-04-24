import axios from 'axios';
import { endpointsCoronaLmao } from '../../shared/global';

export default async function getCountryData(name) {
    try {
        const {
            host,
            routes: { country },
        } = endpointsCoronaLmao;
        const response = await axios.get(`${host}${country}${name}`);
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
