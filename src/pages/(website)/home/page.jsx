import {
  Add16Filled,
  Calendar16Filled,
  CheckmarkCircle16Regular,
  ChevronLeft20Regular,
  ChevronRight20Regular,
  Delete16Regular,
  DocumentFolder20Filled,
  Filter20Filled,
  Search20Regular,
} from "@fluentui/react-icons";
import "./page.css";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]); // Dữ liệu từ API
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [itemsPerPage] = useState(4); // Số bản ghi mỗi trang

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://mocki.io/v1/0fb7f05c-742a-441b-bd30-fcd0d311cca6`
        );
        setData(data.data);
        console.log(data.data);
        // console.log(data.data.Author);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // const resultName = "";
  const colorStyles = [
    { backgroundColor: "#ffadad", color: "#5c0000" },
    { backgroundColor: "#ffd6a5", color: "#5c2900" },
    { backgroundColor: "#fdffb6", color: "#5c5c00" },
    { backgroundColor: "#caffbf", color: "#005c00" },
    { backgroundColor: "#9bf6ff", color: "#00385c" },
    { backgroundColor: "#a0c4ff", color: "#00245c" },
    { backgroundColor: "#bdb2ff", color: "#2d005c" },
    { backgroundColor: "#ffc6ff", color: "#5c0054" },
    { backgroundColor: "#f0f0f0", color: "#5c5c5c" },
    { backgroundColor: "#e8e8e8", color: "#4c4c4c" },
  ];
  // Get Name create Avatar
  const getName = (item) => {
    if (!item) return "";
    const words = item.trim().split(" ");
    const filstWord = words[0]?.[0]?.toUpperCase() || "";
    const lasttWord = words[words.length - 1]?.[0]?.toUpperCase() || "";
    return `${filstWord}${lasttWord}`;
  };

  const getName_PB = (item) => {
    if (!item) return "";
    const words = item.trim().split("-");
    const filstWord = words[0]?.[0]?.toUpperCase() || "";
    const lasttWord = words[words.length - 1]?.[0]?.toUpperCase() || "";
    return `${filstWord}${lasttWord}`;
  };

  const setCss = (item) => {
    const lastNumber = item % 10;
    return colorStyles[lastNumber];
  };

  // Xét giá trị độ ưu tiên
  const priorityValue = (item) => {
    if (item == 1) return "Thấp";
    if (item == 10) return "Thường";
    if (item == 20) return "Gấp";
    return "Khẩn cấp";
  };

  const priorityClassName = (item) => {
    if (item == 1) return "priorityOne";
    if (item == 10) return "priorityTen";
    if (item == 20) return "priorityTwenty";
    return "priorityThirty";
  };

  // Tính toán dữ liệu hiển thị trên từng trang
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Tổng số trang
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Chuyển trang bằng nút
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // FormatTime
  const formatTime = (time) => {
    const date = new Date(time);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}/${month} ${hours}:${minutes}`;
  };

  return (
    <>
      <div className="toolBar">
        <div className="toolBar_left">
          <div className="toolBar_left_icon">
            <DocumentFolder20Filled />
          </div>
          <div className="toolBar_left_Title">Đề xuất</div>
          <div className="toolBar_left_Text">Danh sách</div>
        </div>
        <button>
          <span>
            <Add16Filled />
          </span>
          <span>Tạo đề xuất</span>
        </button>
      </div>

      <div className="contentOutlet_content">
        <div className="subToolBar">
          <div className="subToolBar_left">
            <div className="__right_Item">
              <span>
                <Delete16Regular />
              </span>
              <span>Xóa</span>
            </div>
            <div className="__right_Item">
              <span>
                <CheckmarkCircle16Regular />
              </span>
              <span>Phê duyệt</span>
            </div>
          </div>
          <div className="subToolBar_right">
            <div className="__right_Item">
              <span>
                <Filter20Filled />
              </span>
              <span style={{ color: "#424242" }}>Lọc</span>
            </div>
            <div className="__right_Item">
              <form action="">
                <input type="text" placeholder="Nhập nội dung tìm kiếm" />
                <button type="submit">
                  <Search20Regular style={{ backgroundColor: "#FFF" }} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="contentTable">
          <div className="table">
            <table>
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="check_Box"
                    />
                  </td>
                  <td className="thead_td" style={{ width: "500px" }}>
                    Tiêu đề
                  </td>
                  <td className="thead_td">Trạng thái</td>
                  <td className="thead_td">Phòng ban đề xuất</td>
                  <td className="thead_td">Người tạo</td>
                  <td className="thead_td">Email</td>
                  <td className="thead_td">Ngày tạo</td>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="check_Box"
                      />
                    </td>
                    <td className="__table_titlePriorty">
                      <div
                        className=" tooltip-text"
                        style={{ flex: "1" }}
                        title={item.Title}
                      >
                        {item.Title}
                      </div>
                      <div
                        className={priorityClassName(item.Priority)}
                        style={{ maxWidth: "100px" }}
                      >
                        {priorityValue(item.Priority)}
                      </div>
                    </td>

                    <td>
                      <div
                        className={
                          item.StatusCode == 100 ? "toDo" : "completed"
                        }
                      >
                        {item.StatusCode == 100
                          ? "Đang thực hiện"
                          : "Hoàn thành"}
                      </div>
                    </td>

                    <td>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          style={setCss(item.DepartmentOrganization.LookupId)}
                          className="avtarNamePB"
                        >
                          {getName_PB(item.DepartmentOrganization.LookupValue)}
                        </div>
                        <div
                          style={{ marginLeft: "8px" }}
                          className="namePB  td_tooltip"
                        >
                          <span
                            className="tooltip-text"
                            title={item.DepartmentOrganization.LookupValue}
                          >
                            {item.DepartmentOrganization.LookupValue}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={setCss(item.Author.LookupId)}
                        className="avtarName"
                      >
                        {getName(item.Author.LookupValue)}
                      </div>

                      <div className="nameAuthor td_tooltip">
                        <span
                          className="tooltip-text"
                          title={item.Author.LookupValue}
                        >
                          {item.Author.LookupValue}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="td_tooltip">
                        <span
                          className="tooltip-text"
                          title={item.Author.Email}
                        >
                          {item.Author.Email}
                        </span>
                      </div>
                    </td>
                    <td style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#585A96",
                          marginRight: "8px",
                        }}
                      >
                        <Calendar16Filled />
                      </div>
                      <span>{formatTime(item.Created)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <div className="indexOfPage">
            <span style={{ fontSize: "14px", display: "flex" }}>
              <p style={{ marginRight: "4px", color: "#424242" }}>Hiển thị</p>
              {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, data.length)}
              <p
                style={{
                  marginRight: "4px",
                  marginLeft: "4px",
                  color: "#424242",
                }}
              >
                /
              </p>
              Tổng {data.length} bản ghi
            </span>
          </div>
          <div className="paginationBtn">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              style={{
                background: "none",
                border: "none",
                marginRight: "10px",
                padding: "5px 10px",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
              }}
            >
              <ChevronLeft20Regular />
            </button>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              style={{
                background: "none",
                border: "none",
                marginLeft: "10px",
                padding: "5px 10px",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              }}
            >
              <ChevronRight20Regular />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
