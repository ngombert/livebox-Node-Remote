import * as rp from "request-promise";
import { Livebox } from "./models/livebox";
import { liveBoxCmd } from "./models/liveBoxCmd";


const lb = new Livebox("192.168.1.2", "8080");
// const cmd: liveBoxCmd = {operation: "01", key: "513", mode: "0"};
const cmd: liveBoxCmd = {operation: "10"};

console.log(lb.getUrl(cmd));

lb.currentContext().then((data) => console.log(data));