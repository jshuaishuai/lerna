'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodashEs = require('lodash-es');

function behavior () {
    console.log("这个是behavior es模块");
}

// "use strict";

var sum = function (a, b) {
    return a + b;
};
var result = sum(1, 2);

console.log(result);

function core() {
    // TODO
    var obj = { name: "jason" };
    console.log(lodashEs.get(obj, "name"));

    // behavior();
    console.log("obj", obj.name);
}
core();
// module.exports = core;

console.log(behavior());

exports.core = core;
