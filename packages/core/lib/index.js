// "use strict";

// const _ = require("lodash");
const behavior = require("@eit-monit/behavior");
// const colors = require("colors/safe"); // log 有颜色输出

function core() {
    // TODO
    const obj = { name: "jason" };
    // console.log(colors.green(_.get(obj, "name")));
    behavior();
    console.log("obj", obj.name);
}

module.exports = core;
// import behavior from "@eit-monit/behavior";

// console.log(behavior());
