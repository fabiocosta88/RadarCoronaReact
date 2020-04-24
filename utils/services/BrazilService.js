import axios from 'axios';
import { endpointsCoronaLmao } from '../../shared/global';

export default async function getBrasilTotals() {
    try {
        const {
            host,
            routes: { brazilTotals },
        } = endpointsCoronaLmao;
        const response = await axios.get(`${host}${brazilTotals}`);
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
