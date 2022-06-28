var md5 = require('md5');
var axios = require('axios')

var nonceStr = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    var a = 16 * Math.random() | 0;
    return ("x" == e ? a : 3 & a | 8).toString(16);
})

// console.log("nonceStr:", nonceStr)

function genSign(o, n, s, r, i) {
    console.log("开始decode:", o, n, s, r, i)
    for (var d = "", c = 0, u = Object.keys(o).sort(); c < u.length; c++) {
        var l = u[c], f = o[l];
        if ("object" === e(f) && null !== f) {
            var g = JSON.stringify(o[l]);
            d += l + "=" + (g = g.split("").sort().join("")) + "&";
        } else 0 === f || f ? d += l + "=" + o[l] + "&" : (o[l] = "", d += l + "=&");
    }
    return d += "url=" + n + "&", d += s ? "accessToken=" + s + "&" : "", d += "timestamp=" + r + "&",
        d += "nonceStr=" + i + "&", d += "key=" + "ca235e27dcf94107889b9ad00ceebd48", md5(d);
}

var t = parseInt(String(new Date().getTime() / 1e3))

var accessToken = "ODYyNjY5MDM1Njg5NDc2MDk2OjE6OTA0MzA0Njc2MTEwNDg5ODkxZTk2OTRkYTg4ZTdjYWQ="

var url = "https://www.gza-e.com/api/consumer/order/shoppingTrolley/list"
console.log(url.replace("https://www.gza-e.com/api", ""))
data = {
    "bigType": 1
}

console.log(genSign({}, ' /consumer/order/shoppingTrolley/list', 'ODYyNjY5MDM1Njg5NDc2MDk2OjE6OTA0MzA0Njc2MTEwNDg5ODkxZTk2OTRkYTg4ZTdjYWQ=', 1656408172, '8be288e9eda14bdca0f8171fae08d826'))
// var get_sign = genSign({},url.replace("https://www.gza-e.com/api", ""),accessToken,t,nonceStr)
// default_headers = {
//     "Host": "www.gza-e.com",
//     "sign": md5(get_sign),
//     "timestamp": t,
//     "accessToken": accessToken,
//     "nonceStr": nonceStr,
//     "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.23(0x1800172e) NetType/WIFI Language/zh_CN",
//     "Referer": "https://servicewechat.com/wx88c590140de89f92/185/page-frame.html"
// }
// console.log(default_headers)
// axios({
//     url: url,
//     method: "POST",
//     data: {
//         "bigType": 1
//     },
//     headers: default_headers
// }).then(res=>{
//     console.log(res.data)
// })