import { Outlet } from "react-router-dom";
import Header from "../../component/header/header";
import Sidebar from "../../component/sidebar/sidebar";
import "./layout.css";
const LayoutWebsite = () => {
  return (
    <div>
      <header className="header">
        <Header></Header>
      </header>

      <main className="main">
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="content_oulet">
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
};

export default LayoutWebsite;
