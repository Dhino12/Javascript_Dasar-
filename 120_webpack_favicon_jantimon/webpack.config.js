const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = (env, args) => {
    return {
        context: __dirname,
        entry: './src/index.js',
        output: {
            path: resolve(__dirname, 'dist'),
            publicPath: '/',
            filename: 'index.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/template.html',
            }),
            new FaviconsWebpackPlugin('./src/images/favicon.png'),
        ],
        stats: "errors-only"
    };
}