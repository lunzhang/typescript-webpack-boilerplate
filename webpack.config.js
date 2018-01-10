const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',

    // Add the loader for .ts files.
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    silent: true,
                    transpileOnly: true,
                    errorsAsWarnings: false
                }
            }
        ]
    },
    plugins: [
        new CheckerPlugin()
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/'
    },
    devServer: {
        host: '0.0.0.0',
        inline: true,
        port: 8080,
        contentBase: 'src'
    },
};
