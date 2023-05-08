import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menuitem = (props) => {
  const menu_row = props.menurow;
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const urlMenu = `http://localhost/Laravel-NguyenTanDUng-2121110243/public/api/menu/menu_list/mainmenu/${menu_row.id}`;
    async function getMenus() {
      const result = await axios.get(urlMenu);
      setMenus(result.data);
    }
    getMenus();
  }, [menu_row.id]);

  if (menus.length > 0) {
    return (
      <li className="nav-item dropdown ">
        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {menu_row.name}
        </Link>
        <ul className="dropdown-menu">
          {menus.map((menu2) => (
            <li key={menu2.id}>
              <Link className="dropdown-item" to={menu2.link}>
                {menu2.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={menu_row.link}>
          {menu_row.name}
        </Link>
      </li>
    );
  }
};

export default Menuitem;
