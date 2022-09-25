const path = require('path');

module.exports = {
    mode: 'development',
    // Remove eval from the output
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
};