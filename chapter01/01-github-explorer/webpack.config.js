const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src','index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin({
            overlay: false,
        }),
        new HtmlWebpackPlugin ({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/, //verifica se o arquivo termina com jsx
                exclude: /node_modules/, //ignora a pasta modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                },
            },
            {
                test: /\.scss$/, //verifica se o arquivo termina com jsx
                exclude: /node_modules/, //ignora a pasta modules
                use: ['style-loader', 'css-loader', 'sass-loader']
            }

        ]
    }
}