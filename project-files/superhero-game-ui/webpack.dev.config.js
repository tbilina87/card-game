const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: {
        index: './src/game-ui/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx','.ts','.js'],
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            title: 'Superhero game',
            template: './src/index.html',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true // clean up dist folder before each build
    }
}
