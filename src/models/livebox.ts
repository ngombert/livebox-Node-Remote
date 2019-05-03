import { liveBoxCmd } from "./liveBoxCmd";
import rp = require("request-promise-native");

import * as commands from "../config/commandList.json";

export class Livebox {

    host: String;
    port: String;
    baseUrl: String;

    constructor(host: String, port: String) {
        this.host = host;
        this.port = port;
        this.baseUrl = "/remoteControl/cmd";
    }

    public getUrl(cmd: liveBoxCmd): String {
        let url = "http://" + this.host + ":" + this.port + this.baseUrl + "?operation=" + cmd.operation;

        if ( cmd.key !== undefined ) {
            url += "&key=" + cmd.key;
        }
        if ( cmd.mode !== undefined ) {
            url += "&mode=" + cmd.mode;
        }

        return url;
    }

    public async currentContext(): Promise<any> {

        const options: any = {
            uri: this.getUrl(commands.status).toString(),
            headers: {
                "User-Agent": "Request-Promise"
            },
            json: true
        };

        return rp(options);
    }
}
