import MRouter from "./router/IndexRouter";
import TarBar from "./componets/TarBar";
import "./views/css/App.css"
export default function App(){
    return (
        <div>
            <MRouter>
                <TarBar></TarBar>
            </MRouter>
        </div>
    )
}