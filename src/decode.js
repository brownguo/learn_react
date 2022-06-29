var md5 = require('md5');
var axios = require('axios')
// var e = require("@babel/runtime/helpers/typeof.js");

var nonceStr = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    var a = 16 * Math.random() | 0;
    return ("x" == e ? a : 3 & a | 8).toString(16);
})
var accessToken = "ODgzMzcyNDc1ODM5MTUyMTI4OjE6YjBiNTBjMmY2ZGZmNGI1ODk4YmJlY2U5YjU4ODc1ZWE="

const PLAM_KEY = 'ca235e27dcf94107889b9ad00ceebd48'

var a =  [{"ostId":"991729832864251904","proId":"915349160901738496","quantity":1},{"ostId":"991728563323928576","proId":"915348113533698048","quantity":1}]
// console.log("a", a.split("").sort().join(""))
console.log(JSON.stringify(a).split("").sort())
var timestamp = parseInt(String(new Date().getTime() / 1e3))
function genSign(o, n, s, r, i) {
    var n = n.replace("https://www.gza-e.com/api", "")
    for (var d = "", c = 0, u = Object.keys(o).sort(); c < u.length; c++) {
        var l = u[c], f = o[l];
        if ("object" === typeof (f) && null !== f) {
            console.log("ol", o[l])
            var g = JSON.stringify(o[l]);
            console.log("json g", g)
            console.log("type g", typeof g)
            d += l + "=" + (g = g.split("").sort().join("")) + "&";
            console.log("l", l+g)
            console.log("d", d)
            console.log("f", d)

        } else 0 === f || f ? d += l + "=" + o[l] + "&" : (o[l] = "", d += l + "=&");
    }
    return d += "url=" + n + "&", d += s ? "accessToken=" + s + "&" : "", d += "timestamp=" + r + "&",
        d += "nonceStr=" + i + "&", d += "key=" + PLAM_KEY;
}

var payloads = {
    "orderType": 1,
    "proProType1": 3,
    "orgId": "817425775685795840",
    "shipMode": 1,
    "orderDetailList": [{
        "ostId": "991729832864251904",
        "proId": "915349160901738496",
        "quantity": 1
    }, {
        "ostId": "991728563323928576",
        "proId": "915348113533698048",
        "quantity": 1
    }]
}

var url = "https://www.gza-e.com/api/consumer/order/addOrder"

var get_sign = genSign(payloads,url,accessToken,timestamp,nonceStr)

console.log("加密前:", get_sign)

default_headers = {
    "Host": "www.gza-e.com",
    "timestamp": timestamp,
    "accessToken": accessToken,
    "nonceStr": nonceStr,
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.23(0x1800172e) NetType/WIFI Language/zh_CN",
    "Referer": "https://servicewechat.com/wx88c590140de89f92/185/page-frame.html",
    "sign": md5(get_sign),
}
axios({
    url: url,
    method: "POST",
    data: payloads,
    headers: default_headers
}).then(res=>{
    console.log(res.data)
})