import { endpoints } from "../../../shared/global";

export default class AxiosConfig {
    static config = {
        baseURL: endpoints.host,
        timeout: 10000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            Authorization: null,
            "Content-Type": "application/json",
        },
        responseType: "json",
        crossDomain: true,
    };

    static changeConfig = (config) => {
        return {
            ...AxiosConfig.config,
            ...config,
        };
    };
}
