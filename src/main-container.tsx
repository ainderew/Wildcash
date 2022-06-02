import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import LoginPage from "./screens/login";
import SendPointsPage from "./screens/sendPoints";
import Splash from "./screens/splash";

const MainContainer:React.FC = () =>{
    return(
    <Router>
        <Routes>
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SendPoints" element={<SendPointsPage />} />
            <Route path="/" element={<Splash />} />
        </Routes>
    </Router>
    )
}

export default MainContainer;