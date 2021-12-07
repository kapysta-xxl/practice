const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'public'),
        assetModuleFilename: 'assets/[name].[ext]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.svg$/,
                type: 'asset/inline'
            },
            {
                test: /\.(png|jpg|gif|eot|ttf|woff)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
          }),
        new MiniCssExtractPlugin()
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
}