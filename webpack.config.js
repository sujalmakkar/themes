// const webpack = require('webpack');

module.exports = {
    entry: './client/index.js',
    output: {
    path: __dirname,
    filename: './client/app.js',
    },
    mode:'development',
    devServer: {
        port: 8000,
        static: 'client',
        hot:true,
        },
   };