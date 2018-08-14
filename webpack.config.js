const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    externals: {
        // lodash: '_'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(process.env.APPDATA, 'npm/node_modules')]
    },
    resolveLoader: {
        modules: [path.resolve(process.env.APPDATA, 'npm/node_modules')]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 3000
    }
};
