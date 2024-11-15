import {
  Add16Filled,
  CheckmarkCircle16Regular,
  Delete16Regular,
  DocumentFolder20Filled,
  Filter20Filled,
  Search20Regular,
} from "@fluentui/react-icons";
import "./page.css";
import { useEffect, useState } from "react";
import axios from "axios";
const HomePgae = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://mocki.io/v1/0fb7f05c-742a-441b-bd30-fcd0d311cca6`
        );
        setData(data.data);
        console.log(data.data);
        // console.log(data.data.ID);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // Xét giá trị td
  const priorityValue = (item) => {
    if (item == 1) {
      return "Thấp";
    } else if (item == 10) {
      return "Thường";
    } else if (item == 20) {
      return "Gấp";
    } else {
      return "Khẩn cấp";
    }
  };

  const priorityClassName = (item) => {
    if (item == 1) {
      return "priorityOne";
    } else if (item == 10) {
      return "priorityTen";
    } else if (item == 20) {
      return "priorityTwenty";
    } else {
      return "priorityThirty";
    }
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
              <span>Lọc</span>
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
                <tr>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>Mã ID</td>
                  <td>Tiêu đề</td>
                  <td>Trạng thái</td>
                  <td>Bộ phận</td>
                  <td>Độ ưu tiên</td>
                  <td>Ngày tạo</td>
                  <td>Tác giả</td>
                  <td>Email</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{item.ID}</td>
                    <td>{item.Title}</td>
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
                    <td>{item.DepartmentOrganization.LookupValue}</td>
                    <td>
                      <div className={priorityClassName(item.Priority)}>
                        {priorityValue(item.Priority)}
                      </div>
                    </td>
                    <td>{item.Created}</td>
                    <td>{item.Author.LookupValue}</td>
                    <td>{item.Author.Email}</td>
                    <td>
                      vsdfvsdvvvvvvvvvvv svvvvvvvvvvvvvv vvvvvvvvvvvvvvvvvv
                      vvvvvvvvvvvvvvvvvvv vvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                      vvvvvvvvvvv
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePgae;
