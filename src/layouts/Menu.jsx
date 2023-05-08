
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Menuitem from "./Menuitem";
import { Link } from "react-router-dom";
import './style.css';
const Menu = () => {
  const urlMenu = "http://localhost/Laravel-NguyenTanDUng-2121110243/public/api/menu/menu_list/mainmenu";
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    async function getMenus() {
      const response = await Axios.get(urlMenu);
      setMenus(response.data);
    }
    getMenus();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
      <div className="container-fluid mx-auto">
        <Link className="navbar-brand d-none" to="/">
          Navbar
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
             {/* // Thêm class mx-auto ở đây */}
            {menus.map((menu, index) => (
              <Menuitem key={index} menurow={menu} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
  
};

export default Menu;
