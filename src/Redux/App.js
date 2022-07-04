import MRouter from "./router/IndexRouter";
import TarBar from "./componets/TarBar";
import "./views/css/App.css"
import store from "./redux/store"
import {useEffect, useState} from "react";
export default function App(){
    const [isShow, setIsShow] = useState(store.getState().TabbarReducer.show)
    useEffect(()=>{         //首页App订阅
        console.log("首页App.js订阅 ===> ", store.getState())
        store.subscribe(()=>{
            setIsShow(store.getState().TabbarReducer.show)
        })
    }, [])
    return (
        <div>
            <p>Redux Project Index Page!</p><br />
            <MRouter>
                {isShow && <TarBar></TarBar> }
            </MRouter>
        </div>
    )
}