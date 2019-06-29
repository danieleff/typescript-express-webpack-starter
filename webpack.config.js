const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    
    return {
        entry: "./src/client/index.tsx",
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/client/index.html"
            }),
            new CleanWebpackPlugin(['build/client']),
        ],
        output: {
            filename: "hashed/[name].[hash:8].js",
            path: path.resolve(__dirname, 'build/client'),
            publicPath: "/",
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
            historyApiFallback: true,
            proxy: {
                "/api": "http://localhost:3000"
            }
        }
    }
};
