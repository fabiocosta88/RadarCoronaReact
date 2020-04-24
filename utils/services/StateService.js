import axios from 'axios';
import { endpointsStates } from '../../shared/global';

export default async function getStateData(name) {
    try {
        const {
            host,
            routes: { state },
        } = endpointsStates;
        const response = await axios.get(`${host}${state}${name}`);
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
