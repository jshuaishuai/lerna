const path = require("path");
const babel = require("rollup-plugin-babel");
const node = require("rollup-plugin-node-resolve"); // 查找外部模块
const cjs = require("rollup-plugin-commonjs");

const resolve = (p) => path.resolve(__dirname, "../", p);

const builds = {
    core: {
        entry: resolve("packages/core/lib/core.js"),
        dest: resolve("packages/core/es/core.js"),
        format: "es",
        plugins: [
            babel({
                exclude: "node_modules/**",
            }),
            node(),
            cjs(),
        ],
    },
};

function genConfig(name) {
    const opts = builds[name];
    const config = {
        input: opts.entry,
        external: opts.external,
        plugins: opts.plugins || [],
        output: {
            file: opts.dest,
            format: opts.format,
            name: opts.moduleName || "monit",
        },
    };
    return config;
}

exports.getAllBuilds = () => Object.keys(builds).map(genConfig);
