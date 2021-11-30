import request from "../common/utils/request.js"

export function loginReq(data) {
	return request({
		url: `/login?d=${data.d}`,
		method: "post",
		data:data
	});
}

export function regiterReq(data) {
	return request({
		url: "/register",
		method: "post",
		data:data
	});
}
