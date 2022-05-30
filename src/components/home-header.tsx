import user from "../assets/user_circle.svg";

const HomeHeader: React.FC = () => {
  return (
    <div className="w-full h-full px-8 border-b-[2px] border-gray-200 flex justify-between items-center gap-2">
      <img src={user} alt="" className="img-user " />

      <div className="idnumber-container flex-grow">
        <p className="">
          Hello
          <span className="text-accent font-semibold"> 19-1023-232</span>
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