import react, {useState, useEffect} from "react";

function CtxList(props){
    const [list, setList] = useState([])

    useEffect(()=>{
            if(props.type === 1){
                setList([1,2,3,4])
            }else{
                setList([5,6,7,8])
            }
    }, [props.type])

    return (
        <div>
            <ul>
                {list.map((item)=>{
                    return(
                        <li key={item}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default function App() {
    const [type, setType] = useState(1)
    return(
        <div>
            <button onClick={()=>{
                setType(1)
            }}>DUNK</button>
            <button onClick={()=>{
                setType(2)
            }}>AIRMAX</button>
            <CtxList type={type}></CtxList>
        </div>
    )
}