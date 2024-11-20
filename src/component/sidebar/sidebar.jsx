import {
  Add16Regular,
  Alert24Filled,
  Alert24Regular,
  ApprovalsApp24Filled,
  ApprovalsApp24Regular,
  CaretDown12Filled,
  CaretRight12Filled,
  DocumentFolder24Filled,
  DocumentFolder24Regular,
  Filter16Regular,
  MoreHorizontal24Filled,
  Poll24Filled,
  Poll24Regular,
  QuestionCircle24Regular,
  Settings24Regular,
} from "@fluentui/react-icons";
import "./sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("bgct");

  // Hàm thay đổi className của item khi click vào icon
  const changeCSS = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  // Thay đổi display của menu
  const [isMenu, setIsMenu] = useState({
    menu1: false,
    menu2: false,
  });
  const toggleMenu = (menuId) => {
    setIsMenu((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId], // Đảo ngược trạng thái của menu được click
    }));
  };

  // Thay đổi trạng thái active của thẻ li

  const [indexLi, setindexLi] = useState(["item1_1", "item2_1"]);

  const menuItem1 = [
    { id: "item1_1", title: "Tất cả", alert: null },
    { id: "item1_2", title: "Chờ bàn giao", alert: 2 },
    { id: "item1_3", title: "Đang bàn giao", alert: null },
    { id: "item1_4", title: "Đã bàn giao", alert: null },
  ];

  const menuItem2 = [
    { id: "item2_1", title: "Tất cả", alert: null },
    { id: "item2_2", title: "Chờ xử lý", alert: 2 },
    { id: "item2_3", title: "Đã xử lý", alert: null },
  ];

  const handleClick = (newItem1, newItem2) => {
    setindexLi([newItem1, newItem2]);
    console.log(indexLi);
  };

  return (
    <div className="sidebar">
      <div className="sidebarMenu">
        <div className="sidebarMenu_top">
          <div
            className={
              activeItem === "notification"
                ? "sidebarMenu_itemCss"
                : "sidebarMenu_item"
            }
            onClick={() => changeCSS("notification")}
          >
            <div className="sidebarMenu_icon">
              {activeItem === "notification" ? (
                <Alert24Filled />
              ) : (
                <Alert24Regular />
              )}
            </div>
            <p className="sidebarMenu_text">Thông báo</p>
          </div>

          <div
            className={
              activeItem === "dashboard"
                ? "sidebarMenu_itemCss"
                : "sidebarMenu_item"
            }
            onClick={() => changeCSS("dashboard")}
          >
            <div className="sidebarMenu_icon">
              {activeItem === "dashboard" ? (
                <Poll24Filled />
              ) : (
                <Poll24Regular />
              )}
            </div>
            <p className="sidebarMenu_text">Dashboard</p>
          </div>

          <div
            className={
              activeItem === "process"
                ? "sidebarMenu_itemCss"
                : "sidebarMenu_item"
            }
            onClick={() => changeCSS("process")}
          >
            <div className="sidebarMenu_icon">
              {activeItem === "process" ? (
                <ApprovalsApp24Filled />
              ) : (
                <ApprovalsApp24Regular />
              )}
            </div>
            <p className="sidebarMenu_text">Quy trình</p>
          </div>

          <div
            className={
              activeItem === "bgct" ? "sidebarMenu_itemCss" : "sidebarMenu_item"
            }
            onClick={() => changeCSS("bgct")}
          >
            <div className="sidebarMenu_icon">
              {activeItem === "bgct" ? (
                <DocumentFolder24Filled />
              ) : (
                <DocumentFolder24Regular />
              )}
            </div>
            <p className="sidebarMenu_text">BGCT</p>
          </div>

          <div className="sidebarMenu_item">
            <div className="sidebarMenu_icon">
              <MoreHorizontal24Filled />
            </div>
          </div>
        </div>
        <div className="sidebarMenu_btn">
          <div className="sidebarMenu_item">
            <div className="sidebarMenu_icon">
              <QuestionCircle24Regular />
            </div>
          </div>
          <div className="sidebarMenu_item">
            <div className="sidebarMenu_icon">
              <Settings24Regular />
            </div>
          </div>
        </div>
      </div>
      <div className="sidebarTreeMenu">
        <div className="sidebarTreeMenu_header">
          <h2>BGCT</h2>
          <div className="sidebarTreeMenu_header_btn">
            <button>
              <Filter16Regular />
            </button>
            <button>
              <Add16Regular />
            </button>
          </div>
        </div>
        <div className="sidebarTreeMenu_content">
          {/* div_content */}
          <div className="sidebarTreeMenu_contentBox">
            <div
              className="_contentBox__title"
              onClick={() => {
                toggleMenu("menu1");
              }}
            >
              <span>
                {isMenu.menu1 == true ? (
                  <CaretDown12Filled />
                ) : (
                  <CaretRight12Filled />
                )}
              </span>
              <span className="_contentBox__menuTitle">Chứng từ</span>
            </div>
            {/* menu */}

            <ul
              className="_contentBox__menu"
              style={{ display: isMenu.menu1 ? "block" : "none" }}
            >
              {menuItem1.map((item, index) => (
                <li
                  key={index}
                  className={indexLi[0] == item.id ? "active" : ""}
                  onClick={() => handleClick(item.id, indexLi[1])}
                >
                  <a href="#">
                    <span>{item.title}</span>
                  </a>

                  {item.alert != null ? (
                    <div className="__menu_alret">{item.alert}</div>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* div_content */}
          <div className="sidebarTreeMenu_contentBox">
            <div
              className="_contentBox__title"
              onClick={() => {
                toggleMenu("menu2");
              }}
            >
              <span>
                {isMenu.menu2 == true ? (
                  <CaretDown12Filled />
                ) : (
                  <CaretRight12Filled />
                )}
              </span>
              <span className="_contentBox__menuTitle">Đề xuất</span>
            </div>
            {/* menu */}

            <ul
              className="_contentBox__menu"
              style={{ display: isMenu.menu2 ? "block" : "none" }}
            >
              {menuItem2.map((item, index) => (
                <li
                  key={index}
                  className={indexLi[1] == item.id ? "active" : ""}
                  onClick={() => handleClick(indexLi[0], item.id)}
                >
                  <a href="#">
                    <span>{item.title}</span>
                  </a>

                  {item.alert != null ? (
                    <div className="__menu_alret">{item.alert}</div>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
