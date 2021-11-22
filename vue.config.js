
module.exports = {  
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */  
    publicPath: "",  
    assetsDir: "static/lipin",  
    outputDir: "dist",  
    runtimeCompiler: true,  
    productionSourceMap: false,  
    /* webpack-dev-server 相关配置 */  
    devServer: {  
        /* 自动打开浏览器 */  
        open: false,
        /* 设置为0.0.0.0则所有的地址均能访问 */  
        host: "0.0.0.0",  
        https: false,  
        hotOnly: false,  
        /* 使用代理 */  
        proxy: {  
            '/api': {  
                "target" : "http://10.255.50.83:8080",
                "changeOrigin" : true,
                "secure" : false,
                "pathRewrite" : {
                	"^/api" : ""
                }
            },  
        },  
    },  
}  
