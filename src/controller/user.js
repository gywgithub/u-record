import request from '@/common/request'
export default {
    //注册
    regiter : function(data) {
        return request({
            url: '/user/regiter',
            method: 'post',
            data
        })
    },
    //登录
    login : function(data) {
      return request({
        url: '/user/login',
        method: 'post',
        data
      })
    },
    //退出登录
    logout : function() {
      return request({
        url: '/user/logout',
        method: 'post'
      })
    }
}
