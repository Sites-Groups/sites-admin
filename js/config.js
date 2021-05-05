/**
 * 配置文件
 * @author: yanqs
 * @date :2021-0420
 */

const domain = "https://sites.link";
const siteToken = localStorage.getItem("siteToken") || $.cookie('siteToken');
let api = {
	loginPost: loginPost,
	domain: domain,
	siteToken: siteToken,
	ajaxPost: ajaxPost
}

/**
 * 
 * @name: 登录
 * @param { url } 请求地址
 * @param { data } 请求数据
 */
function loginPost(url, data = {}) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: domain + url,
			data: JSON.stringify(data),
			type: 'POST',
			dataType: 'json',
			async: false,
			headers: {
				"Content-Type": 'application/json;charset=utf8',
			},
			success: (res, status, xhr) => {
				if (res.success) {
					localStorage.setItem("siteToken", res.data.siteToken);
				}
				resolve(res);
			},
			error: (err) => {
				reject(err);
			}
		})
	})
}
/**
 * @name: post请求
 * @param { url } 请求地址
 * @param { data } 请求数据
 */
function ajaxPost(url, data = {}) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: domain + url,
			data: JSON.stringify(data),
			type: 'POST',
			dataType: 'json',
			async: 'flase',
			headers: {
				"Content-Type": 'application/json;charset=utf8',
				authorization: siteToken
			},
			success: (res) => {
				resolve(res);
			},
			error: (err) => {
				reject(err);
			}
		})
	})
}
