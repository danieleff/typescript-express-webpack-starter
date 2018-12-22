const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
        ],
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
