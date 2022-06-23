import React, {useContext, useReducer} from "react";


const initState = {
    a:"AAAAAAAA CTX",
    b:"BBBBBBBB CTX",
}
const reducer = (prevState, action)=>{
    console.log(prevState, action)
    let newState = {...prevState}
    switch (action.type){
        case "changeA":
            newState.a = action.value
            return newState
        case "changeB":
            newState.b = action.value
            return newState
        default:
            return prevState
    }
}
const GlobalContext = React.createContext()

export default function App (){
    const [state, dispatch] = useReducer(reducer, initState)
    return(
        <GlobalContext.Provider value={
            {
                state, dispatch
            }
        }>
            <div>
                <ButtonItem />
                <ChildA/>
                <ChildB/>
            </div>
        </GlobalContext.Provider>
    )
}

function ButtonItem(){
    const {dispatch} = useContext(GlobalContext)
    return (
        <div>
            <button onClick={()=>{
                dispatch({
                    type: "changeA",
                    value: "改变A了"
                })
            }}>changeChildA</button>
            <button onClick={()=>{
                dispatch({
                    type: "changeB",
                    value: "改变B了"
                })
            }}>changeChildB</button>
        </div>
    )
}

function ChildA(){
    const {state} = useContext(GlobalContext)
    return (
        <div>
            ChindA - {state.a}
        </div>
    )
}
function ChildB(){
    const {state} = useContext(GlobalContext)
    return (
        <div>
            ChildB - {state.b}
        </div>
    )
}