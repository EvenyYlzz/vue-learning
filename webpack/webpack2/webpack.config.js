var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:path.join(__dirname,'index.js'),

    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
    },

    module:{
        rules:[
            {test:/.css$/,use:["style-loader","css-loader"]},

            {test:/.less$/,use:["style-loader","css-loader","less-loader"]},
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./index.html'),
            filename:'index.html',
        })
    ]
}