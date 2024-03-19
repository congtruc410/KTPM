import { memo, useState } from "react";
import "./style.scss";

import {
  AiOutlineFacebook,
  AiOutlineGlobal,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
  const [menus, setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Cửa hàng",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Sản phẩm",
      path: "",
      isShowSubmenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bài viết",
      path: "",
    },
    {
      name: "Liên hệ",
      path: "",
    },
  ]);

  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top-left">
              <ul>
                <li className="">
                  <AiOutlineMail />
                  Hello@gmail.com
                </li>
                <li className="">Free ship more {formatter(20000)}</li>
              </ul>
            </div>
            <div className="col-6 header__top-right">
              <ul>
                <li>
                  <Link to={""}>
                    <AiOutlineFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <CiInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <CiLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineGlobal />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <AiOutlineUser />
                  </Link>
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-xl-3">
            <div className="header__logo">
              <h1>SiVi SHOP</h1>
            </div>
          </div>
          <div className="col-lg-3 col-xl-6">
            <div className="header__menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header__menu-dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-xl-3">
            <div className="header__cart">
              <div className="header__cart-price">
                <span>{formatter(1001230)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#!">
                    <AiOutlineShoppingCart />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
