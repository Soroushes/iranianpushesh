import Header from "../containers/header";
import HomeFileStatus from "../containers/HomeFileStatus";
import AllFiles from "../containers/AllFiles";

const Home = ()=>{
    return(
        <div className="home-background">
            <Header/>
            <HomeFileStatus/>
            <AllFiles/>
        </div>
    )
}
export default Home ;