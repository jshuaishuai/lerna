const path = require("path");
const buble = require("rollup-plugin-buble");
const node = require("rollup-plugin-node-resolve");
const cjs = require("rollup-plugin-commonjs");
const flow = require("rollup-plugin-flow-no-whitespace"); // 去除flow静态类型检查代码

const resolve = (p) => path.resolve(__dirname, "../", p);

const builds = {
    "core-esm": {
        entry: resolve("packages/core/lib/index.js"),
        // dest: resolve("packages/core/es/index.prod.js"),
        dest: resolve("packages/core/es/index.js"),
        format: "es",
        plugins: [
            node({ browser: true }), // 查找和打包node_modules中的第三方模块
            buble(),
        ],
        external: Object.keys(
            require("../packages/core/package.json").dependencies
        ),
    },
    "core-cjs": {
        entry: resolve("packages/core/lib/index.js"),
        dest: resolve("packages/core/cjs/index.js"),
        // dest: resolve("packages/core/cjs/index.prod.js"),
        format: "cjs",
        plugins: [
            node(), // 查找和打包node_modules中的第三方模块
            // cjs(), // 将 CommonJS 转换成 ES 模块供 Rollup 处理
            buble(),
        ],
        external: Object.keys(
            require("../packages/core/package.json").dependencies
        ),
    },
};

function genConfig(name) {
    const opts = builds[name];
    const config = {
        input: opts.entry,
        external: opts.external,
        plugins: [flow()].concat(opts.plugins || []),
        output: {
            file: opts.dest,
            format: opts.format,
            name: opts.moduleName || "monit",
        },
    };
    console.log(config);
    return config;
}

exports.getAllBuilds = () => Object.keys(builds).map(genConfig);
