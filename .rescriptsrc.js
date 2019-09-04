const { appendWebpackPlugin } = require('@rescripts/utilities')
const webpack = require('webpack');
module.exports = appendWebpackPlugin(
    new webpack.DefinePlugin({
        'process.env': {
            LOCALE: JSON.stringify('zh-CN'),
        },
    }),
)