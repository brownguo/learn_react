import axios from "axios";

const getCinemasActionCreater = ()=>{
    return (dispatch)=>{
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method:"get",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            dispatch({
                type:"change_list",
                payload:res.data.data.cinemas
            })
        })
    }
}

export default getCinemasActionCreater