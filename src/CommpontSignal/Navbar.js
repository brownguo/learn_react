import React, {Component} from 'react';

class Navbar extends Component {

    render() {
        return (
            <div style={{background:"red"}}>
                <button onClick={this.props.evt}>click</button>
                <span>navbar</span>
            </div>
        );
    }
}

export default Navbar;