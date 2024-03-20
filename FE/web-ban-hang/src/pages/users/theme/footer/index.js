import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-sm-12">
            <div className="footer__about">
              <h1 className="footer__about-logo">SiVi SHOP</h1>
              <ul>
                <li>Địa chỉ: 213 Dương Đình Nghệ</li>
                <li>Phone: 0977-232232</li>
                <li>Email: sivicode@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-sm-12">
            <div className="footer__widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to="#!">Liên hệ</Link>
                </li>
                <li>
                  <Link to="#!">Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to="#!">Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="#!">Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to="#!">Giỏ hàng</Link>
                </li>
                <li>
                  <Link to="#!">Danh sách ưa thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="footer__widget">
              <h6>Khuyến mãi & ưu đãi</h6>
              <p>Đăng ký thông tin ở đây</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="Nhập email" />
                  <button type="submit" className="button-submit">
                    Đăng ký
                  </button>
                </div>
                <div className="footer__widget-socials">
                  <div>
                    <AiOutlineFacebook />
                  </div>
                  <div>
                    <AiOutlineInstagram />
                  </div>
                  <div>
                    <AiOutlineLinkedin />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
