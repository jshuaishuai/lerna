"use strict";

const _ = require("lodash");
const behavior = require("@eit-monitor/behavior");
const colors = require("colors/safe"); // log 有颜色输出

function core() {
    // TODO
    const obj = { name: "jason" };
    console.log(colors.green(_.get(obj, "name")));
    behavior();
}

module.exports = core;
