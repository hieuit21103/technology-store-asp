import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/layout.css";
import "../assets/home.css";

function Home() {
  return (
    <>
    <header className="navbar">
        <div className="container d-flex justify-content-between align-items-center">
        <div className="logo"><a href="/">HGMG</a></div>
        <form className="search-bar d-none d-lg-block" action="/search" method="GET" style={{ maxWidth: "400px", width: "100%", margin: "0 2rem" }}>
            <div className="input-group">
            <input type="text" className="form-control" placeholder="Tìm kiếm sản phẩm..." name="q"/>
            <button className="btn-search" type="submit">
                <i className="fas fa-search"></i>
            </button>
            </div>
        </form>
        <div className="icons">
            <a href="#" className="me-3">
            <i className="fas fa-shopping-cart"></i>
            </a>
            <a href="#">
            <i className="fas fa-user"></i>
            </a>
        </div>
        </div>
    </header>

    <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container d-flex justify-content-center align-items-center">
        <div className="hero-content text-center">
            <h1 className="hero-title">HIEU GAMING GEAR</h1>
            <p className="hero-slogan">Nâng tầm trải nghiệm gaming của bạn</p>
            <a href="#" className="btn-shop-now">
            <i className="fas fa-shopping-cart"></i> Mua ngay
            </a>
        </div>
        </div>
    </section>

    <section className="featured-products">
        <div className="container">
        <h2 className="section-title">Sản phẩm nổi bật</h2>
        <div className="row g-4">
            <div className="col-6 col-lg-3">
            <div className="product-card">
                <img src="#{{ asset('images/product1.jpg') }}" alt="Bàn phím cơ" className="product-image" />
                <div className="product-info">
                <h3 className="product-name"><i className="fas fa-keyboard"></i> Bàn phím cơ Gaming RGB</h3>
                <p className="product-price">2.990.000đ</p>
                </div>
            </div>
            </div>
            <div className="col-6 col-lg-3">
            <div className="product-card">
                <img src="{{ asset('images/product2.jpg') }}" alt="Chuột gaming" className="product-image" />
                <div className="product-info">
                <h3 className="product-name"><i className="fas fa-mouse"></i> Chuột Gaming Pro</h3>
                <p className="product-price">1.490.000đ</p>
                </div>
            </div>
            </div>
            <div className="col-6 col-lg-3">
            <div className="product-card">
                <img src="{{ asset('images/product3.jpg') }}" alt="Tai nghe gaming" className="product-image" />
                <div className="product-info">
                <h3 className="product-name"><i className="fas fa-headset"></i> Tai nghe Gaming 7.1</h3>
                <p className="product-price">3.290.000đ</p>
                </div>
            </div>
            </div>
            <div className="col-6 col-lg-3">
            <div className="product-card">
                <img src="{{ asset('images/product4.jpg') }}" alt="Ghế gaming" className="product-image" />
                <div className="product-info">
                <h3 className="product-name"><i className="fas fa-chair"></i> Ghế Gaming Pro</h3>
                <p className="product-price">4.990.000đ</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>

    <section className="categories">
        <div className="container">
        <h2 className="section-title">Danh mục sản phẩm</h2>
        <div className="row g-4">
            <div className="col-6 col-lg-3">
            <div className="category-card">
                <img src="{{ asset('images/category1.jpg') }}" alt="Bàn phím" className="category-image" />
                <div className="category-name"><i className="fas fa-keyboard"></i> Bàn phím</div>
            </div>
            </div>
            <div className="col-6 col-lg-3">
            <div className="category-card">
                <img src="{{ asset('images/category2.jpg') }}" alt="Chuột" className="category-image" />
                <div className="category-name"><i className="fas fa-mouse"></i> Chuột</div>
            </div>
            </div>
            <div className="col-6 col-lg-3">
            <div className="category-card">
                <img src="{{ asset('images/category3.jpg') }}" alt="Tai nghe" className="category-image" />
                <div className="category-name"><i className="fas fa-headset"></i> Tai nghe</div>
            </div>
            </div>
            <div className="col-6 col-lg-3">
            <div className="category-card">
                <img src="{{ asset('images/category4.jpg') }}" alt="Ghế gaming" className="category-image" />
                <div className="category-name"><i className="fas fa-chair"></i> Ghế gaming</div>
            </div>
            </div>
        </div>
        </div>
    </section>

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
    </>
  );
}

export default Home;