/**
 * 配置文件
 * @author: yanqs
 * @date :2021-0420
 */

const domain="http://sites.applinzi.com";
let api = {
    loginPost: loginPost,
    domain:domain
}

/**
 * 
 * @name: 登录
 * @param { url } 请求地址
 * @param { data } 请求数据
 */
function loginPost(url,data = {}) {
    return new Promise((resolve,reject) => {
        $.ajax({ 
            url: domain + url,
            data: JSON.stringify(data),
            type: 'POST',
            dataType: 'json',
            headers: {
                "Content-Type": 'application/json;charset=utf8',
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
