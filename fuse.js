const fsbx = require("fuse-box");

// Create FuseBox Instance
let fuseBox = new fsbx.FuseBox({
    homeDir: "app/",
    sourceMap: {
        bundleReference: "sourcemaps.js.map",
        outFile: "./dist/sourcemaps.js.map",
    },
    outFile: "./dist/out.js",
    plugins: [
        fsbx.CSSPlugin(),
        fsbx.BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ["es2015", "react"]
            }
        })
    ]
});

fuseBox.devServer(">index.js");
