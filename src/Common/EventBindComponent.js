import React, {Component} from 'react';

class EventBindComponent extends Component {

    handleButtonClick(){
        console.log(123)
    }

    handleButtonClick2 = ()=>{
        console.log("func!")
    }

    render() {
        return (
            <div>
                <input type="text"/>
                <button onClick={this.handleButtonClick}>Button 1</button>
                <button onClick={this.handleButtonClick2}>Button 2</button>
            </div>
        );
    }
}

export default EventBindComponent;