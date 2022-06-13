import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AdminScreen from "./screens/admin";
import CreateEventScreen from "./screens/createEvent";
import Home from "./screens/home";
import LoginScreen from "./screens/login";
import MyQRScreen from "./screens/myQR";
import ScanScreen from "./screens/scan";
import ScanEventScreen from "./screens/scanEventQR";
import SendPointsByIDScreen from "./screens/sendByID";
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
            <Route path="/scanEvent" element={<ScanEventScreen />} />
            <Route path="/idSend" element={<SendPointsByIDScreen />} />
            <Route path="/myQr" element={<MyQRScreen />} />
        </Routes>
    </Router>
    )
}

export default MainContainer;