import React from "react";
import "../assets/layout.css";
import "../assets/shop.css";

function Shop() {
    return (
        <>
        <header className="navbar">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo"><a href="/">HGMG</a></div>
                <form className="search-bar d-none d-lg-block" action="/search" method="GET" style={{maxWidth: 400, width: '100%', margin: '0 2rem'}}>
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

        <main className="products-page">
            <div className="container">
            <div className="row">
                <div className="col-lg-3">
                <div className="filters-sidebar">
                    <h3 className="filter-title">Bộ lọc sản phẩm</h3>
                    
                    <div className="filter-section">
                    <h4><i className="fas fa-th-large"></i> Danh mục</h4>
                    <div className="filter-options">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="category1"/>
                        <label className="form-check-label" for="category1">Bàn phím</label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="category2"/>
                        <label className="form-check-label" for="category2">Chuột</label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="category3"/>
                        <label className="form-check-label" for="category3">Tai nghe</label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="category4"/>
                        <label className="form-check-label" for="category4">Ghế gaming</label>
                        </div>
                    </div>
                    </div>
                    <div className="filter-section">
                    <h4><i className="fas fa-tags"></i> Khoảng giá</h4>
                    <div className="filter-options">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="price1"/>
                        <label className="form-check-label" for="price1">Dưới 1 triệu</label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="price2"/>
                        <label className="form-check-label" for="price2">1 - 2 triệu</label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="price3"/>
                        <label className="form-check-label" for="price3">2 - 3 triệu</label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="price4"/>
                        <label className="form-check-label" for="price4">Trên 3 triệu</label>
                        </div>
                    </div>
                    </div>
                    <div className="filter-section">
                    <h4><i className="fas fa-copyright"></i> Thương hiệu</h4>
                    <div className="filter-options">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="brand1"/>
                        <label className="form-check-label" for="brand1">Logitech</label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="brand2"/>
                        <label className="form-check-label" for="brand2">Razer</label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="brand3"/>
                        <label className="form-check-label" for="brand3">Corsair</label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="brand4"/>
                        <label className="form-check-label" for="brand4">HyperX</label>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-9">
                <div className="products-header">
                    <h2 className="section-title">Tất cả sản phẩm</h2>
                    <div className="products-tools">
                    <div className="sort-by">
                        <select className="form-select">
                        <option value="newest">Mới nhất</option>
                        <option value="price-asc">Giá tăng dần</option>
                        <option value="price-desc">Giá giảm dần</option>
                        <option value="name-asc">Tên A-Z</option>
                        </select>
                    </div>
                    <div className="view-options">
                        <button className="btn-view active"><i className="fas fa-th"></i></button>
                        <button className="btn-view"><i className="fas fa-list"></i></button>
                    </div>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-6 col-lg-4">
                    <div className="product-card">
                        <div className="product-badge">New</div>
                        <img src="{{ asset('images/product1.jpg') }}" alt="Bàn phím cơ" className="product-image" />
                        <div className="product-info">
                        <h3 className="product-name"><i className="fas fa-keyboard"></i> Bàn phím cơ Gaming RGB</h3>
                        <p className="product-price">2.990.000đ</p>
                        <div className="product-actions">
                            <button className="btn-add-cart"><i className="fas fa-shopping-cart"></i></button>
                            <button className="btn-favorite"><i className="far fa-heart"></i></button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-6 col-lg-4">
                    <div className="product-card">
                        <div className="product-badge sale">-20%</div>
                        <img src="{{ asset('images/product2.jpg') }}" alt="Chuột gaming" className="product-image" />
                        <div className="product-info">
                        <h3 className="product-name"><i className="fas fa-mouse"></i> Chuột Gaming Pro</h3>
                        <p className="product-price">
                            <span className="old-price">1.990.000đ</span>
                            1.490.000đ
                        </p>
                        <div className="product-actions">
                            <button className="btn-add-cart"><i className="fas fa-shopping-cart"></i></button>
                            <button className="btn-favorite"><i className="far fa-heart"></i></button>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="pagination-container">
                    <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1"><i className="fas fa-chevron-left"></i></a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#"><i className="fas fa-chevron-right"></i></a>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>
            </div>
            </div>
        </main>

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
    )
}
export default Shop;