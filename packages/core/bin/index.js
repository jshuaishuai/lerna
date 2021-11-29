#! /usr/bin/env node

// const importLocal = require("import-local");

// if (importLocal(__dirname)) {
//     console.log("正在使用 @eit-monitor 本地版本");
// } else {
require("../lib")(process.argv.slice(2));
// }
