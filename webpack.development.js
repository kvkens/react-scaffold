const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://cnodejs.org',
                secure: false,
                //pathRewrite: {'^/api' : ''}
            }
        }
    },
    plugins: [

    ]
});