import axios from 'axios';
import * as jsonapi from 'ts-jsonapi';
import {Alert} from "..";


const BASE_URL = 'https://api-v3.mbta.com';
const Deserializer = new jsonapi.Deserializer({
    keyForAttribute: 'camelCase'
});

export class Client {

    private apiKey: string;

    constructor(apiKey?:string) {
        this.apiKey = apiKey;
    }

    async getAlerts(route?:string, includes?:string): Promise<Alert[]> {
        return await this.mbtaRequest('/alerts');
    }

    private async mbtaRequest(url) {
        const raw = await axios.get(`${BASE_URL}${url}`);
        return Deserializer.deserialize(raw.data);
    }
}