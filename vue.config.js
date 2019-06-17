module.exports = {
    devServer:{
        proxy:{
            '/api':{  //只需要代理一个接口，下面的内容都能代理到
                target:'http://39.97.33.178',
                changeOrigin:true
            }
        }
    }
}