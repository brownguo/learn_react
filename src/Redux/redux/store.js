import {createStore} from "redux";

const reducer = (prevState={    //reducer prevState给了一个初始值
    show:true,
    cityName: {
        idx: 123,
        item: "BEIJING"
    }
}, action) => {
    let newState = {...prevState}
    switch (action.type){
        case 'tabbar-hide':
            newState.show = false
            return newState
        case 'tabbar-show':
            newState.show = true
            return newState
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

const store = createStore(reducer)
export default store