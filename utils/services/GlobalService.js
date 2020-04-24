import axios from 'axios';
import { endpointsCoronaLmao } from '../../shared/global';

export default async function getGlobalTotals() {
    try {
        const {
            host,
            routes: { globalTotals },
        } = endpointsCoronaLmao;
        const response = await axios.get(`${host}${globalTotals}`);
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
