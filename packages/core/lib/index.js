// "use strict";

// const _ = require("lodash");
// const behavior = require("@eit-monit/behavior");

import { get } from "lodash-es";
import behavior from "@eit-monit/behavior";

let sum = (a, b) => {
    return a + b;
};
let result = sum(1, 2);

console.log(result);

function core() {
    // TODO
    const obj = { name: "jason" };
    console.log(get(obj, "name"));

    // behavior();
    console.log("obj", obj.name);
}
core();
// module.exports = core;

console.log(behavior());
export { core };
