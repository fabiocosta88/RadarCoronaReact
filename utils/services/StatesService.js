import axios from 'axios';
import { endpointsStates } from '../../shared/global';

export default async function getStates() {
    try {
        const {
            host,
            routes: { states },
        } = endpointsStates;
        const response = await axios.get(`${host}${states}`);
        return response.data.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
