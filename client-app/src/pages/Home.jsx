import "../assets/css/home.css";
import "../assets/css/layout.css";

function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="hero-content text-center">
                        <h1 className="hero-title">HIEU GAMING GEAR</h1>
                        <p className="hero-slogan">Nâng tầm trải nghiệm gaming của bạn</p>
                        <a href="/shop" className="btn-shop-now">
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
        </>
    );
}

export default Home;