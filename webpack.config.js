const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    
    const dev = argv.mode === "development";

    return {
        entry: "./src/client/index.tsx",
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/client/index.html"
            }),
            new webpack.DefinePlugin({
                WEBPACK_DEFINE_SERVER_URL: JSON.stringify("http://localhost:3000")
            }),
            new CleanWebpackPlugin(['build/client']),
        ],
        output: {
            filename: "[name].[hash:8].js",
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
