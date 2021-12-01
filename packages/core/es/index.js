import { get } from 'lodash-es';

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
    console.log(get(obj, "name"));

    // behavior();
    console.log("obj", obj.name);
}
core();
// module.exports = core;

console.log(behavior());

export { core };
