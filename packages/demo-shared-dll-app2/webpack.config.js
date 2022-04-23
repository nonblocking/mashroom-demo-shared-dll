
const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MashroomWDLLWebpackPlugin = require('@mashroom/mashroom-dll-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/js/index',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle_app2.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
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
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [
        new ESLintPlugin({
            extensions: ['.js', '.ts', '.tsx'],
            fix: true,
        }),
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
        port: 6002,
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        }
    }
};
