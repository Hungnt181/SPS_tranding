// import { Search16Regular } from "@fluentui/react-icons/fonts";
import "./header.css";
import { Search16Filled } from "@fluentui/react-icons";
const Header = () => {
  return (
    <div className="header">
      <div className="headerForm">
        <form action="">
          <button type="submit">
            <Search16Filled />
          </button>
          <input type="text" placeholder="Tìm kiếm " />
        </form>
      </div>
      <div className="headerInfAcc">
        <p className="headerInfAcc_name">Nguyễn Mạnh Cường</p>
        <div className="headerInfAcc_img">
          <img src="/images/Team Avatar.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
