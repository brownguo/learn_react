
function User(props){
    console.log(props)
    let {bg} = props
    return(
        <div>
            <div style={{background: bg, width:"200px"}}>
                形参来的box, 通过props来的。
            </div>
            User! 这是一个函数式组件，无状态组件。
        </div>
    )
}

export default User