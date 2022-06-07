import React, {Component} from 'react';

class EventBindComponent extends Component {

    handleButtonClick(){
        console.log(123)
    }
    render() {
        return (
            <div>
                <input type="text"/>
                <button onClick={this.handleButtonClick}>Button 1</button>
            </div>
        );
    }
}

export default EventBindComponent;