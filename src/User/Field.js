import React, {Component} from 'react';

class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.field}</label>
                <input type={this.props.type} value={this.props.value} onChange={(currentEvt)=>
                    this.props.onChangeIpt(currentEvt.target.value)
                }/>
            </div>
        );
    }
}

export default Field;