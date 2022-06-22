import react, {useReducer} from "react";

//处理函数
const reducer = (prevState, action)=>{
    let newState = {...prevState}
    switch (action.types){
        case "minus":
            newState.count--
            return newState
        case "add":
            newState.count++
            return newState
        default:
            return prevState
    }
}

const initState = {
    count: 0
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <button onClick={()=>{
                dispatch({
                    types: "minus"
                })
            }}>-</button>
            {state.count}
            <button onClick={()=>{
                dispatch({
                    types: "add"
                })
            }}>+</button>
        </div>
    )
}