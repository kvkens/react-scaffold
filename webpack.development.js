const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
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