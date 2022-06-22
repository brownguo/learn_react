import react, {useContext, useEffect, useState} from 'react';
import axios from "axios";

const GlobalContext = react.createContext()

export default function App () {
    const [filmList, setFileList] = useState([])
    const [detailInfo, setDetailInfo] = useState("")

    useEffect(()=>{
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5253884",
            headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16547570291073282262499329","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            },
        }).then(res=>{
            setFileList(res.data.data.films)
        }).catch(err=>{
            console.log("error:"+err)
        })
    })
    return (
        <GlobalContext.Provider value={{
            infos:detailInfo,
            changeInfo:(name, synopsis)=>{
                setDetailInfo({
                    name:name,
                    info: synopsis
                })
            }
        }}>
            <div>
                {
                    filmList.map((item)=>
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
    const val = useContext(GlobalContext)
    return (
        <div onClick={(currentEvt)=>{
            val.changeInfo(name, synopsis)
        }}>
            <img src={poster} alt={name} style={{height:200, width:200}}/>
            {name}
        </div>
    );
}

function FilmDetail(){
    const val = useContext(GlobalContext)
    return (
        <div style={{height:300, width:300, background:"#ccc", top:100, position:"fixed", right:0}}>
            <h2>{val.infos.name}</h2>{val.infos.info}
        </div>
    )
}