import QRCode from "react-qr-code";
import ScreenHeader from "../components/screen_header";

interface props {
  eventID: string;
}
const ModalEventQR: React.FC<props> = ({ eventID }: props) => {
  return (
    <div className="w-full h-screen absolute z-10 bg-accent grid grid-rows-[3rem_1fr]">
      <ScreenHeader label="Event QR Code" img="" />
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <QRCode value={eventID} />
      </div>
    </div>
  );
};

export default ModalEventQR;
