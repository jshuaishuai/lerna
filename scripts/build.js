const rollup = require("rollup");
const fs = require("fs");
const path = require("path");

let builds = require("./config").getAllBuilds();

build(builds);

function build(builds) {
    let built = 0;
    const total = builds.length;
    const next = () => {
        buildEntry(builds[built])
            .then(() => {
                built++;
                if (built < total) {
                    next();
                }
            })
            .catch(logError);
    };
    next();
}

function buildEntry(config) {
    const output = config.output;
    const { file } = output;
    console.log(file, output);
    return rollup
        .rollup(config)
        .then((bundle) => bundle.generate(output))
        .then(({ output: [{ code }] }) => write(file, code));
}

// function buildEntry(config) {
//     const output = config.output;
//     const { file } = output;
//     return rollup.rollup(config).then((bundle) =>
//         bundle.write({
//             format: "es",
//             moduleName: "main", //umd或iife模式下，若入口文件含 export，必须加上该属性
//             dest: file,
//         })
//     );
// }

function write(dest, code) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dest, code, (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
}

function logError(e) {
    console.log(e);
}
