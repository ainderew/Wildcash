import { useContext } from "react";

import user from "../assets/user_circle.svg";
import AuthContext from "../context/authContext";

const HomeHeader: React.FC = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className="w-full h-full px-8 border-b-[2px] border-gray-200 flex justify-between items-center gap-2">
      <img src={user} alt="" className="img-user w-10" />

      <div className="idnumber-container flex-grow">
        <p className="">
          Hello 
          <span className="text-accent font-semibold"> {auth[1].userIdNumber}</span>
        </p>
      </div>
      <div className="filter-container">
        <select name="" id="">
          <option value="1">This Week</option>
          <option value="1">This Month</option>
        </select>
      </div>
    </div>
  );
};

export default HomeHeader;
