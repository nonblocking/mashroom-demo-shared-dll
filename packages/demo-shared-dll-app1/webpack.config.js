
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MashroomWDLLWebpackPlugin = require('@mashroom/mashroom-dll-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/js/index',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle_app1.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true,
                            configFile: __dirname + '/.eslintrc.json',
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|gif|jpg|jpeg|ttf|eot|woff(2)?)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MashroomWDLLWebpackPlugin({
            manifest: require("@mashroom/demo-shared-dll/dist/demo_shared_dll_manifest.json"),
            dllPath: require.resolve("@mashroom/demo-shared-dll/dist/demo_shared_dll.js")
        }),
        new webpack.DllReferencePlugin({
            manifest: require("@mashroom/demo-shared-dll/dist/demo_shared_dll_manifest.json"),
        }),
        new HtmlWebpackPlugin({
            inject: 'head',
            template: path.resolve(__dirname, 'src', 'index.html'),
        })
    ],
    devServer: {
        port: 6001,
        open: true
    }
};
