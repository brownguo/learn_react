const CityReducer = (prevState={    //reducer prevState给了一个初始值
    cityName: {
        idx: 123,
        item: "城市列表"
    }
}, action) => {
    let newState = {...prevState}
    switch (action.type){
        case 'change-city':
            newState.cityName = {
                idx:action.value.idx,
                item: action.value.item
            }
            return newState
        default:
            return prevState
    }
}
export default CityReducer