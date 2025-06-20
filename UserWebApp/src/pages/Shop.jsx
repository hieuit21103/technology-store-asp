import React from "react";
import "../assets/css/layout.css";
import "../assets/css/shop.css";
import sample from "../assets/images/products/sample.jpg";

function Shop() {
    return (
        <>
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
                                            <input className="form-check-input" type="checkbox" id="category1" />
                                            <label className="form-check-label" for="category1">Bàn phím</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="category2" />
                                            <label className="form-check-label" for="category2">Chuột</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="category3" />
                                            <label className="form-check-label" for="category3">Tai nghe</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="category4" />
                                            <label className="form-check-label" for="category4">Ghế gaming</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-section">
                                    <h4><i className="fas fa-tags"></i> Khoảng giá</h4>
                                    <div className="filter-options">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="price1" />
                                            <label className="form-check-label" for="price1">Dưới 1 triệu</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="price2" />
                                            <label className="form-check-label" for="price2">1 - 2 triệu</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="price3" />
                                            <label className="form-check-label" for="price3">2 - 3 triệu</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="price4" />
                                            <label className="form-check-label" for="price4">Trên 3 triệu</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-section">
                                    <h4><i className="fas fa-copyright"></i> Thương hiệu</h4>
                                    <div className="filter-options">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="brand1" />
                                            <label className="form-check-label" for="brand1">Logitech</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="brand2" />
                                            <label className="form-check-label" for="brand2">Razer</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="brand3" />
                                            <label className="form-check-label" for="brand3">Corsair</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="brand4" />
                                            <label className="form-check-label" for="brand4">HyperX</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="products-header">
                                <h2>Tất cả sản phẩm</h2>
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
                                        <img src={sample} alt="Bàn phím cơ" className="product-image" />
                                        <div className="product-info">
                                            <h3 className="product-name"><i className="fas fa-keyboard"></i> Bàn phím cơ Gaming RGB</h3>
                                            <p className="product-price">2.990.000đ</p>
                                            <div className="product-actions">
                                                <a href="/cart" className="btn-add-cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="/product" className="btn-product"><i className="far fa-eye"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <div className="product-card">
                                        <div className="product-badge sale">-20%</div>
                                        <img src={sample} alt="Chuột gaming" className="product-image" />
                                        <div className="product-info">
                                            <h3 className="product-name"><i className="fas fa-mouse"></i> Chuột Gaming Pro</h3>
                                            <p className="product-price">
                                                <span className="old-price">1.990.000đ</span>
                                                1.490.000đ
                                            </p>
                                            <div className="product-actions">
                                                <a className="btn-add-cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a className="btn-product"><i className="far fa-eye"></i></a>
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
        </>
    )
}
export default Shop;