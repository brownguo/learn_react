import {createStore} from "redux";

const TarbarReducer = (prevState={    //reducer prevState给了一个初始值
    show:true,
}, action) => {
    let newState = {...prevState}
    switch (action.type){
        case 'tabbar-hide':
            newState.show = false
            return newState
        case 'tabbar-show':
            newState.show = true
            return newState
        default:
            return prevState
    }
}
export default TarbarReducer