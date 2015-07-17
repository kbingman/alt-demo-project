module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: 'public/js/app.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            { test: /\.jsx?/, loader: 'babel-loader' }
        ]
    }
};
