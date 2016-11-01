var path = require('path');

module.exports = {
    entry: './src/main.js',
    publicPath: './public',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {

        loaders: [
            {
                test: /.js?$|.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }

        ],
        externals: {
            //don't bundle the 'react' npm package with our bundle.js
            //but get it from a global 'React' variable
            'react': 'React'
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }
};
