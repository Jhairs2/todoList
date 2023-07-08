const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [path.resolve(__dirname, 'src/index.js'), path.resolve(__dirname, 'src/sideMenu.js')],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        assetModuleFilename: 'assets/[name][ext]',
        clean: true,
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
      },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },

            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',

            },

            {
                test: /\.html$/i,
                loader: 'html-loader'
              },
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
        title: 'Todo List',
        filename: 'index.html',
        template: './src/index.html'
    
        }),
    
      ],



}