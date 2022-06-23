import react, {useContext, useEffect, useReducer, useState} from 'react';
import axios from "axios";

const initState = {
    infos: "",
    filmList: []
}

const reducer = (prevState, action)=>{
    console.log(prevState, action.type)
    let newState = {...prevState}
    switch (action.type){
        case 'init_filmlist':
            newState.filmList = action.value
            return newState

        case 'change_info':
            newState.infos = action.value
            return newState
        default:
            return prevState
    }

}

const GlobalContext = react.createContext()
export default function App () {
    const [state, dispatch] = useReducer(reducer, initState)
    useEffect(()=>{
        axios.get(`/test.json`).then(res=>{
            dispatch({
                type:"init_filmlist",
                value:res.data.data.films
            })
        })
    }, [])
    return (
        <GlobalContext.Provider value={{
            state, dispatch
        }}>
            <div>
                {
                    state.filmList.map((item)=>
                        <FilmItem key={item.filmId} {...item}/>
                    )
                }
                <FilmDetail/>
            </div>
        </GlobalContext.Provider>
    );
}


function FilmItem(props){
    let {name, poster, synopsis} = props
    const {dispatch} = useContext(GlobalContext)
    return (
        <div onClick={()=>{
            dispatch({
                type:"change_info",
                value: {
                    name: name,
                    synopsis: synopsis
                }
            })
        }}>
            <img src={poster} alt={name} style={{height:200, width:200}}/>
            {name}
        </div>
    );
}

function FilmDetail(){
    const {state} = useContext(GlobalContext)
    return (
        <div style={{height:300, width:300, background:"#ccc", top:100, position:"fixed", right:0}}>
            <h2>{state.infos.name}</h2>{state.infos.synopsis}
        </div>
    )
}