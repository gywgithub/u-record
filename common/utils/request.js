const baseUrl = "/api";
const token = "wkk2323klk";

const http = (param) => {
	if (!token) {
		// 这里处理没有token认证逻辑
		console.error("无token");
		return;
	}
	// 请求参数
	let url = param.url,
	    method = param.method,
	    header = {'content-type': "application/json; charset=utf-8" , "authorization" : uni.getStorageSync("token") || ""},
	    data = param.data || {},
	    hideLoading = param.hideLoading || false;
		
	//加载圈
	if (!hideLoading) {
	    uni.showLoading({
	        title: '加载中...'
	    });
	}
	
	// 返回promise
	return new Promise((resolve, reject) => {
	    // 请求
	    uni.request({
	        url: baseUrl + url,
	        data: data,
	        method: method.toUpperCase(),
	        header: header,
	        success: (res) => {
	            // 判断 请求api 格式是否正确
	            if (res.statusCode && res.statusCode != 200) {
					reject(res.errMsg);
	            }
	            //抛出结果
	            resolve(res.data)
	        },
	        //请求失败
	        fail: (e) => {
	            reject(e.data);
	        },
	        //请求完成
	        complete() {
	            //隐藏加载
	            if (!hideLoading) {
	                uni.hideLoading();
	            }
	        }
	    })
	})
	
};

export default http;

