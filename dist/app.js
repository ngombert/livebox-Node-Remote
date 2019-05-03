"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const livebox_1 = require("./models/livebox");
const lb = new livebox_1.Livebox("192.168.1.2", "8080");
// const cmd: liveBoxCmd = {operation: "01", key: "513", mode: "0"};
const cmd = { operation: "10" };
console.log(lb.getUrl(cmd));
lb.currentContext().then((data) => console.log(data));
//# sourceMappingURL=app.js.map