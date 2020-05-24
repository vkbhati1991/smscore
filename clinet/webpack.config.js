const path = require('path');
module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
        "sms": "./src/App.js"
    },
    output: {
        path: path.join(__dirname, "../build/assets/js/"),
        filename: "[name].js",
        sourceMapFilename: "[name].map"
    },
    devServer: { contentBase: './dist', },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
};

