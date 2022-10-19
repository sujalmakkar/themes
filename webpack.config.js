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
        module: {
            rules: [
                {
                  test: /\.(glsl|vs|fs|vert|frag)$/,
                  exclude: /node_modules/,
                  use: [
                    'raw-loader',
                    'glslify-loader'
                  ]
                }
              ]
        }
  
   };