const rollup = require("rollup");
const fs = require("fs");

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
