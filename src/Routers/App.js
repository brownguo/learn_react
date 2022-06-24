import MRouter from "./router/IndexRouter";
import TarBar from "./componets/TarBar";
export default function App(){
    return (
        <div>
            <MRouter>
                <TarBar></TarBar>
            </MRouter>
        </div>
    )
}