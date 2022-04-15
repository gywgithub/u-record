import request from "../common/utils/request.js"

export function loginReq(data) {
	return request({
		url: `user/login`,
		method: "post",
		data:data
	});
}

export function regiterReq(data) {
	return request({
		url: "user/register",
		method: "post",
		data:data
	});
}
