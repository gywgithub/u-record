import request from "../common/utils/request.js"

export function test(data) {
	return request({
		url: "api/Login/GetUnoginConfiguration",
		method: "get",
		hideLoading : true
	});
}

export function testp(data) {
	return request({
		url: "api/Login/GetUnLoginConfiguration",
		method: "post",
		data : data
	});
}
