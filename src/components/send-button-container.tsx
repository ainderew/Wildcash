import { useNavigate } from "react-router-dom";

interface props {
  img: string;
  label: string;
  destination: string;
}

const SendButtonsContainer: React.FC<props> = ({
  img,
  label,
  destination,
}: props) => {
  const navigate = useNavigate();
  const handleRedirect = (destination: string): void => {
    navigate(`/${destination}`);
  };

  const boxStyle = {
    background: "#FFFFFF",
    // boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.25)",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
  };

  return (
    <div
      style={boxStyle}
      onClick={() => handleRedirect(destination)}
      className="min-h-[5.5rem] rounded-lg flex items-center gap-4 px-4 active:scale-95 transition-all duration-100 "
    >
      <img src={img} alt="" className="" />
      <div className="flex flex-col">
        <p className="font-bold text-sm">{label}</p>
        <p className="text-gray-400 text-xs font-extralight">
          Scan to spend/receive points
        </p>
      </div>
    </div>
  );
};

export default SendButtonsContainer;
