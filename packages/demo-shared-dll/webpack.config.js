
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: ['@mashroom/demo-ui-library', 'react', 'react-dom'],
    output: {
        path: __dirname + '/dist',
        filename: "demo_shared_dll.js",
        library: "demo_shared_dll_[hash]"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist", "demo_shared_dll_manifest.json"),
            // MUST be the same as output.library, https://webpack.js.org/plugins/dll-plugin
            name: "demo_shared_dll_[hash]"
        })
    ]
};
