import {Route, Routes} from "react-router-dom";
import Login from "./pages/login" ;
import Home from "./pages/Home";
import CreateFile from "./pages/CreateFile";
const App = ()=>{
    return(
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route element={<Login/>} path={'/login'}/>
            <Route element={<CreateFile/>} path={'/create-file'}/>
        </Routes>
    )
}
export default App ;