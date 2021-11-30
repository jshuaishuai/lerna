function behavior () {
  console.log("这个是behavior es模块");
}

// "use strict";
// const _ = require("lodash");
 // const colors = require("colors/safe"); // log 有颜色输出


function core() {

  behavior();
}

var core_1 = core; // import behavior from "@eit-monit/behavior";

export { core_1 as default };
