import { useState } from "react";
import { BsFillLaptopFill, BsFillPhoneFill, BsTablet } from "react-icons/bs";
import { FaTshirt, FaMale, FaFemale, FaJeans } from "react-icons/fa";
import { AiOutlineLaptop, IconName } from "react-icons/ai";
const Brandmenuhome = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <ul className="list-group mt-5"   style={{ marginTop:"1000px", borderRadius: "10px" }}>
      <li
        className={`list-group-item bg-dark text-white fw-bold d-flex align-items-center ${
          activeMenu === "men" && "active"
        }`}
        onClick={() => handleMenuClick("men")}
      >
        <BsFillLaptopFill className="me-2" />
        <span>Laptop cũ</span>
      </li>
      <li
        className={`list-group-item bg-light d-flex align-items-center ${
          activeMenu === "shirt" && "active"
        }`}
        onClick={() => handleMenuClick("shirt")}
      >
        <AiOutlineLaptop className="me-2 text-dark" />
        <span>Phụ kiện Laptop</span>
      </li>
      <li
        className={`list-group-item bg-light d-flex align-items-center ${
          activeMenu === "shirt_nam" && "active"
        }`}
        onClick={() => handleMenuClick("shirt_nam")}
      >
        <BsFillLaptopFill className="me-2 text-dark" />
        <span>Gaming Laptop</span>
      </li>
      <li
        className={`list-group-item bg-light d-flex align-items-center ${
          activeMenu === "thun_nam" && "active"
        }`}
        onClick={() => handleMenuClick("thun_nam")}
      >
        <BsFillLaptopFill className="me-2 text-dark" />
        <span>Gaming Laptop</span>
      </li>
      <li
        className={`list-group-item bg-dark text-white fw-bold d-flex align-items-center ${
          activeMenu === "women" && "active"
        }`}
        onClick={() => handleMenuClick("women")}
      >
        <BsFillLaptopFill className="me-2" />
        <span>Laptop doanh nhân</span>
      </li>
      <li
        className={`list-group-item bg-light d-flex align-items-center ${
          activeMenu === "shirt_nu" && "active"
        }`}
        onClick={() => handleMenuClick("shirt_nu")}
      >
        <BsFillLaptopFill className="me-2 text-dark" />
        <span>Ultrabook</span>
      </li>
      <li
        className={`list-group-item bg-light d-flex align-items-center ${
          activeMenu === "thun_nu" && "active"
        }`}
        onClick={() => handleMenuClick("thun_nu")}
      >
        <BsFillPhoneFill className="me-2 text-dark" />
        <span>Điện thoại mới</span>
      </li>
      <li
        className={`list-group-item bg-light d-flex align-items-center ${
          activeMenu === "short_nam" && "active"
        }`}
        onClick={() => handleMenuClick("short_nam")}
      >
        <BsTablet className="me-2 text-dark" />
        <span>Máy tính bảng</span>
      </li>
    </ul>
  );
};
export default Brandmenuhome
