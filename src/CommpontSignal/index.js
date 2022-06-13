import React, {Component} from 'react';
import Navbar from "./Navbar";
import SignalCtx from "./SignalCtx";
class Index extends Component {
    state = {
        isShow: true
    }
    handleEvt = ()=>{
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        return (
            <div>
                <Navbar evt={this.handleEvt}/>
                {this.state.isShow && <SignalCtx/>}
            </div>
        );
    }
}

export default Index;