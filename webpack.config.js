const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'linaria-css-grid',
        libraryTarget: 'umd'
    },
    externals: {
        linaria: {
            commonjs: 'linaria',
            commonjs2: 'linaria',
            amd: 'linaria',
            root: 'linaria'
        }
    }
};