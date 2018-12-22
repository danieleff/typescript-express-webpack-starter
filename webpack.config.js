var serverUrl = "";


const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    
    const isDev = argv.mode === "development";

    if (isDev) {
        serverUrl = "http://localhost:3000";
    }

    return {
        entry: "./src/client/index.tsx",
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/client/index.html"
            }),
            new webpack.DefinePlugin({
                WEBPACK_DEFINE_SERVER_URL: JSON.stringify(serverUrl)
            }),
            new CleanWebpackPlugin(['build/client']),
        ],
        output: {
            filename: "hashed/[name].[hash:8].js",
            path: path.resolve(__dirname, 'build/client')
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },
        module: {
            rules: [
              { test: /\.tsx?$/, loader: "ts-loader" }
            ]
        },
        devServer: {
            disableHostCheck: true,
        }
    }
};
