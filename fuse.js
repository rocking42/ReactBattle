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
        fsbx.SVGPlugin(),
        fsbx.CSSPlugin(),
        fsbx.BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ["latest"],
                plugins: [
                    ["transform-react-jsx"]
                ]
            }
        })
    ]
});

fuseBox.devServer(">index.js");
