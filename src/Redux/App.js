import MRouter from "./router/IndexRouter";
import TarBar from "./componets/TarBar";
import "./views/css/App.css"
import store from "./redux/store"
import {useEffect, useState} from "react";
export default function App(){
    const [isShow, setIsShow] = useState(store.getState().show)
    useEffect(()=>{         //首页订阅
        store.subscribe(()=>{
            setIsShow(store.getState().show)
        })
    }, [])
    return (
        <div>
            ReduxProject!
            <MRouter>
                {isShow && <TarBar></TarBar> }
            </MRouter>
        </div>
    )
}