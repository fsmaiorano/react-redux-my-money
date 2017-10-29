const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //First file to be init
    entry: './src/index.jsx',
    output: {
        path: __dirname + './public',
        filename: 'app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'windows.jQuery:': 'jquery'
        }),
        new extractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/, //Select all .js and .jsx
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread'] //spread
            }
        },
        {
            test: /\.css$/,
            loader: extractTextPlugin.extract('style-loader', 'css-loader')
        },
        {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
}