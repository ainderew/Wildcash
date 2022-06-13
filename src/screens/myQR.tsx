import { useContext } from "react";
import AuthContext from "../context/authContext"; 

import QRCode from "react-qr-code";
import ScreenHeader from "../components/screen_header";

const MyQRScreen:React.FC = () =>{
    const {auth} = useContext(AuthContext) 
    return(
        <div className="w-full h-screen grid grid-rows-[3rem_1fr]">
            <ScreenHeader label="My QR Code" img="" />

            <div className="w-full h-full bg-accent flex flex-col justify-center items-center">
                <QRCode value ={auth[1].userIdNumber} />
            </div>
        </div>
    )
}

export default MyQRScreen