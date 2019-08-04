import axios from 'axios';
import * as jsonapi from 'ts-jsonapi';
import {Alert, Vehicle} from "..";
import {Schedule} from "../types/Schedule";
import {Prediction} from "../types/Prediction";


const BASE_URL = 'https://api-v3.mbta.com';
const Deserializer = new jsonapi.Deserializer({
    keyForAttribute: 'camelCase'
});

export class Client {

    private apiKey: string;

    constructor(apiKey?:string) {
        this.apiKey = apiKey;
    }

    async getAlerts(route?:string, includes?:Array<'stops'|'routes'|'trips'|'facilities'>): Promise<Alert[]> {
        return await this.mbtaRequest('/alerts', route, includes);
    }

    async getPredictions(route?:string, includes?:Array<'schedule'|'stop'|'route'|'trip'|'vehicle'|'alerts'>): Promise<Prediction[]> {
        return await this.mbtaRequest('/predictions', route, includes);
    }

    async getVehicles(route?:string, includes?:Array<'stop'|'route'|'trip'>): Promise<Vehicle[]> {
        return await this.mbtaRequest('/vehicles', route, includes);
    }

    async getSchedule(route?:string, includes?:Array<'stop'|'route'|'trip'|'prediction'>): Promise<Schedule[]> {
        return await this.mbtaRequest('/schedule', route, includes);
    }

    private async mbtaRequest(url: string, route: string, includes: string[]) {
        const raw = await axios.get(this.buildUrl(url, route, includes));
        return Deserializer.deserialize(raw.data);
    }

    private buildUrl(tag, route?:string, includes?:string[], apiKey?:string) {
        let url = `${BASE_URL}${tag}`;
        let extras = 0;
        if(includes) {
            url += `?filter[route]=${route}&include=${includes.join(',')}`;
            extras += 1;
        }
        return url;
    }
}