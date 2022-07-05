import MRouter from "./router/IndexRouter";
import TarBar from "./componets/TarBar";
import "./views/css/App.css"
import {connect} from "react-redux";

function App(props){
    return (
        <div>
            <h3>React-Redux Project Index Page!</h3><br />
            <MRouter>
                {props.isShow && <TarBar></TarBar>}
            </MRouter>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        isShow: state.TabbarReducer.show
    }
}
export default connect(mapStateToProps)(App)