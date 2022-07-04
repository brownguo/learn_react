
//形参过来的参数
const changeCityAction = (idx, item) =>{
    return {
        type:"change-city",
        value: {
            idx, item
        }
    }
}

export {changeCityAction}