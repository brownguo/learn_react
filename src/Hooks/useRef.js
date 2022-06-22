import react, {useRef, useState} from "react";


export default function App(){
    let nums = useRef(0)
    const [num,setnum] = useState(0)
    return (
        <div>
            <button onClick={()=>{
                nums.current++
                setnum(num+1)
                console.log(nums.current)
            }}>incr</button>
            {num}-
            {nums.current}
        </div>
    )
}