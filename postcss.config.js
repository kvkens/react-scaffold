module.exports = {
    plugins: [
        require('autoprefixer')({ browsers: ['last 2 Chrome versions', 'last 2 Firefox versions', 'Safari >= 7', 'ie > 10'] }),
        require('postcss-flexbugs-fixes')
    ]
}