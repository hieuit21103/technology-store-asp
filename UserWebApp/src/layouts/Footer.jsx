import React from "react";

function Footer() {
    return (
        <footer>
            <div className="container">
            <div className="row g-4">
                <div className="col-6 col-lg-3">
                <div className="footer-section">
                    <h3>Về chúng tôi</h3>
                    <ul>
                    <li><a href="#"><i className="fas fa-angle-right"></i> Giới thiệu</a></li>
                    <li><a href="#"><i className="fas fa-angle-right"></i> Tuyển dụng</a></li>
                    <li><a href="#"><i className="fas fa-angle-right"></i> Liên hệ</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-6 col-lg-3">
                <div className="footer-section">
                    <h3>Chính sách</h3>
                    <ul>
                    <li><a href="#"><i className="fas fa-angle-right"></i> Chính sách bảo hành</a></li>
                    <li><a href="#"><i className="fas fa-angle-right"></i> Chính sách đổi trả</a></li>
                    <li><a href="#"><i className="fas fa-angle-right"></i> Chính sách vận chuyển</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-6 col-lg-3">
                <div className="footer-section">
                    <h3>Hỗ trợ</h3>
                    <ul>
                    <li><a href="#"><i className="fas fa-angle-right"></i> FAQ</a></li>
                    <li><a href="#"><i className="fas fa-angle-right"></i> Hướng dẫn mua hàng</a></li>
                    <li><a href="#"><i className="fas fa-angle-right"></i> Bảo mật thông tin</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-6 col-lg-3">
                <div className="footer-section">
                    <h3>Kết nối với chúng tôi</h3>
                    <div className="social-links">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="copyright">
                <p><i className="far fa-copyright"></i> 2025 HIEU GAMING GEAR. All rights reserved.</p>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
