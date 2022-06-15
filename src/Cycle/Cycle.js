import React, {Component} from 'react';

class Cycle extends Component {
    constructor() {
        super();
        this.state = {
            ctx:"cycle"
        }
    }

    //在dom都渲染完之后调用。
    componentDidMount() {
        let a = document.getElementById("cycle")
        console.log(a)
    }

    render() {
        return (
            <div>
                <span id="cycle">{this.state.ctx}</span>
            </div>
        );
    }
}

export default Cycle;