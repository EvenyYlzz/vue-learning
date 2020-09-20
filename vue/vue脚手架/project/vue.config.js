//vue-cli4 （webpack、项目）配置
module.exports = {
    devServer :{
        port:8003,  //覆盖修改端口
    },
    //publicPath:'' 如果你用live server打开build设置完后的项目，可以设置为空，这样就可以直接打开不会报错，能够找到打包之后的文件

    publicPath: process.env.NODE_ENV === 'production'?'/my-app/':''//生产环境跟开发环境
    //如果部署项目的时候，要求部署到my-app这个目录下，要把publicPath设置成my-app

    //node环境变量

    //npm run build 环境变量就是就是production
    //npm run serve 环境变量就是development
}