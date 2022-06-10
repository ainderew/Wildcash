import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AdminScreen from "./screens/admin";
import CreateEventScreen from "./screens/createEvent";
import Home from "./screens/home";
import LoginScreen from "./screens/login";
import ScanScreen from "./screens/scan";
import SendPointsScreen from "./screens/sendPoints";
import Splash from "./screens/splash";

const MainContainer:React.FC = () =>{
    return(
    <Router>
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/Login" element={<LoginScreen />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Admin" element={<AdminScreen />} />
            <Route path="/SendPoints" element={<SendPointsScreen />} />
            <Route path="/CreateEvent" element={<CreateEventScreen />} />
            <Route path="/scan" element={<ScanScreen />} />
        </Routes>
    </Router>
    )
}

export default MainContainer;