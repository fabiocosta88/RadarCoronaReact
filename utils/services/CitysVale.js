import axios from 'axios';
import { endpointCitysName } from '../../shared/global';

export default async function getCitysVale(uf) {
    try {
        const {
            host,
            routes: { valeCitys },
        } = endpointCitysName;
        const response = await axios.get(`${host}${valeCitys}${uf}/distritos`);
        return response.data;
    } catch (error) {
        const msg = error.response ? error.response.data.userMessage : '';
        return { error: msg };
    }
}
