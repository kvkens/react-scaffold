module.exports = {
    plugins: [
        require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 10 Firefox versions', 'Safari >= 7', 'ie > 10'] }),
    ]
}