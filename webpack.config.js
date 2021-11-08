const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");

const settings = {
    distPath: path.join(__dirname, "dist"),
    srcPath: path.join(__dirname, "src")
};

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader", 
                    "sass-loader"
                ],
            },
            {
            test: /\.(woff(2)?|ttf|eot )(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts'
                    }
                }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets"
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};