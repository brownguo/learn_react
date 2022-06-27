import React, {Component} from 'react';
import store from "../redux/store";
class Cinemas extends Component {
    render() {
        return (
            <div>
                CinemasPage
                <div onClick={()=>{
                    this.props.history.push('/city')
                }}>
                    {store.getState().cityName.idx} - {store.getState().cityName.item}
                </div>
            </div>
        );
    }
}

export default Cinemas;