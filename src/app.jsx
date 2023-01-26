import {Route, Routes} from "react-router-dom";
import Login from "./pages/login" ;
import Home from "./pages/Home";
import CreateFile from "./pages/CreateFile";
import NotFound from "./base/NotFound";
const App = ()=>{
    return(
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route element={<Login/>} path={'/login'}/>
            <Route element={<CreateFile/>} path={'/create-file'}/>
            <Route element={<NotFound/>} path={'*'}/>
        </Routes>
    )
}
export default App ;