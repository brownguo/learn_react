import React, {Component} from 'react';
import "../css/app.css"

const Header = ()=>{
    let name = "brown"
    return(
        <div style={{background: "green", fontSize:"40px"}}>Headers1, Halo:{name}</div>
    )
}
function Footer(){
    let background_color = {
        background: "#ccc",
        fontSize: "30px"
    }
    return(
        <div style={background_color}>
            Footer2
            <div className="active">style from css file</div>
            <label htmlFor="username">用户名：</label>
            <input type="text" id="username"/>
        </div>
    )
}


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default App;