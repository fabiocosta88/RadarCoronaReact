import axios from 'axios';
import { endpointsCoronaLmao } from '../../shared/global';

export default async function getCountries() {
    try {
        const {
            host,
            routes: { countries },
        } = endpointsCoronaLmao;
        const response = await axios.get(`${host}${countries}`);
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
