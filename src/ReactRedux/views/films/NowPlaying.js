import React, {useEffect, useState} from 'react';
import {useHistory,withRouter} from 'react-router-dom'
import axios from "axios";

export default function NowPlaying(props){
    const [list,setList] = useState([])
    useEffect(()=>{
        axios({
            url: "/test.json"
        }).then(res=>{
           setList(res.data.data.films)
        })
    },[])

    return (
        <div>
            <ul>

                {
                    list.map((film)=>{
                        return (
                            <WithFilmItem key={film.filmId} {...film}>{film.name}</WithFilmItem>
                        )
                    })
                }
            </ul>
        </div>
    );
}

function FileItem(props) {
    let {filmId, name} = props
    return (
        <div>
            <li onClick={(current_dom)=>{
                props.history.push(`/detail/${filmId}`)
            }}>
                {name}
            </li>
        </div>
    );
}
const WithFilmItem = withRouter(FileItem)