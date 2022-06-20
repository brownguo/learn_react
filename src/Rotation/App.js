import React, {Component} from 'react';
import TSwiper from "./TSwiper/TSwiper";
import TSwiperItem from "./TSwiper/TSwiperItem";
class App extends Component {
    render() {
        return (
            <div>
                <TSwiper>
                    <TSwiperItem>item1</TSwiperItem>
                    <TSwiperItem>item2</TSwiperItem>
                    <TSwiperItem>item3</TSwiperItem>
                </TSwiper>
            </div>
        );
    }
}
export default App;