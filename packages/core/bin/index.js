#! /usr/bin/env node

const importLocal = require("import-local");

if (importLocal(__dirname)) {
    console.log("正在使用 @eit-monit 本地版本2222");
} else {
    require("../lib")(process.argv.slice(2));
}
