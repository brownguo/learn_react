import React, {Component} from 'react';

class Login extends Component {
    state = {
        text: "Plz enter account!"
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={(event)=>{
                    this.setState({
                        text:event.target.value
                    })
                }}/>
                <button onClick={()=>{
                    console.log(this.state.text)
                }}>登录</button>
                <button onClick={()=>{
                    this.setState({
                        text: ""
                    })
                }}>重置</button>
            </div>
        );
    }
}

export default Login;