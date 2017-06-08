var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        'bootstrap-loader',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.html$/,
            loader: 'raw-loader'
        },
        {
            test: /\.scss$/,
            loader: [
                'style-loader',
                'css-loader',
                'autoprefixer-loader?browsers=last 3 version',
                'sass-loader?outputStyle=expanded'
            ]
        },
        {
            test: /\.(woff2?|ttf|eot|svg)$/,
            loader: 'url-loader?limit=10000'
        },
        {
            test: /bootstrap-sass\/assets\/javascripts\//,
            loader: 'imports-loader?jQuery=jquery'
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:3000'
        }
    }
};