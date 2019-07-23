const path = require ( 'path' )
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    // devServer: {
    //     contentBase: './dist'
    // },
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve ( __dirname, 'dist' ),
    filename: 'index.js'
  },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({template: './index.html'})
    // ]
}