import react, {Component, useState} from "react";

export default function App() {
    const [text, setText] = useState("")
    const [list, setList] = useState(['aa', 'bb', 'cc'])
    const handleDel = (idx)=>{
        let newList = [...list]
        newList.splice(idx, 1)
        setList(newList)
    }
    return (
        <div>
            <input onChange={(current_dom_evt)=>{
                console.log(current_dom_evt.target.value)
                setText(current_dom_evt.target.value)
            }} value={text}/>
            <button onClick={(event)=>{
                setList([...list, text])
                setText("")
            }}>ClickAdd</button>
            <ul>
                {
                    list.map((item, idx)=>{
                        return (
                            <li key={idx}>
                                {item}
                                <button onClick={()=>{
                                    handleDel(idx)
                                }}>del</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}