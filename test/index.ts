import { Client } from "../src";

const client = new Client();
client.getAlerts().then(alerts => {
    alerts[0].
    console.log(alerts);
});
