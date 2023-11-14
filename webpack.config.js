
const mode=process.env.NODE_ENV

const HtmlWebpackPlugin=require('html-webpack-plugin')          // для экспорта html
const MiniCssExtractPlugin=require('mini-css-extract-plugin')   // для экспорта css

const path=require('path')

module.exports={
    mode:mode,

    // devServer:{
    //     port: 8080,
    //     // port: 3000,
    // },

    entry:{
        main:'./src/index.js',
    },

    output:{
        filename:'[name].js',                           // куда будет падать js
        assetModuleFilename:'assets/[name][ext]',       // куда будут падать статичные файлы
        clean:true,                                     // очищает dist перед повторной компиляцией
    },

    devtool:mode==='development'?'source-map':'inline-source-map',
            // 'source-map' - можно найти источник стиля при инспекции html в браузере

    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',    // откуда будет импортироваться html
            filename:'index.html',          // название импортируемого html который упадёт в dist
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css',          // название импортируемого css который упадёт в dist
        }),
    ],

    module:{
        rules:[
            {
                test:/\.html$/i,            // будет собирать все html внутри src и его подпапок
                loader:'html-loader',       // указываем загрузчик
            },
            {
                test:/\.(sa|sc|c)ss$/i,
                use:[
                    mode==='development'?MiniCssExtractPlugin.loader:'style-loader',
                            // MiniCssExtractPlugin.loader - сделает отдельный css для стилей
                            // 'style-loader' - запишет все стили inline (в тег <head> через js)

                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test:/\.m?js$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                    },
                }
            },
            {
                test:/\.(png|svg|jpg|jpeg|git|tiff|webp)$/i,
                type:'asset/resource',
            },
            {
                test:/\.woff|woff2|eot|ttf|otf$/i,
                type:'asset/resource',
            },
        ],
    },
}