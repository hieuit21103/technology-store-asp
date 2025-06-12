import React from "react";

function Detail() {
    return (
        <>
            <div className="container products-page py-5">
                <div className="row g-4">
                    {/* Hình ảnh và ảnh phụ */}
                    <div className="col-lg-5">
                        <div className="product-card mb-3">
                            <img
                                src="https://via.placeholder.com/450x450"
                                className="product-image w-100"
                                alt="Tai nghe không dây XYZ"
                            />
                        </div>
                        <div className="d-flex gap-2">
                            {[1, 2, 3, 4, 5].map((img) => (
                                <img
                                    key={img}
                                    src={`https://via.placeholder.com/80x80?text=Img+${img}`}
                                    className="img-thumbnail"
                                    style={{ cursor: "pointer" }}
                                    alt={`Ảnh ${img}`}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Thông tin chi tiết */}
                    <div className="col-lg-7">
                        <h2 className="product-name mb-2">Tai nghe không dây XYZ</h2>
                        <p className="mb-1 text-muted">Thương hiệu: XYZTech | Bảo hành: 24 tháng</p>
                        <div className="d-flex align-items-center gap-3 mt-3 mb-3">
                            <div>
                                <span className="product-price fs-3 fw-bold text-danger">₫990.000</span>
                                <del className="old-price ms-2 text-muted">₫1.200.000</del>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-3 mb-4">
                            <label className="fw-bold">Số lượng:</label>
                            <div className="input-group" style={{ maxWidth: "120px" }}>
                                <button className="btn btn-outline-danger">
                                    <i className="fa-solid fa-minus"></i>
                                </button>
                                <input
                                    type="text"
                                    className="form-control text-center"
                                    defaultValue="1"
                                    min="1"
                                />
                                <button className="btn btn-outline-danger">
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>

                        <div className="d-flex gap-3 mb-4">
                            <button className="btn btn-outline-danger flex-fill">
                                <i className="fa-solid fa-cart-plus"></i> Thêm vào giỏ
                            </button>
                            <button className="btn btn-danger flex-fill">Mua ngay</button>
                        </div>

                        <div className="mb-3">
                            <strong>Chia sẻ:</strong>
                            <div className="d-flex gap-2 mt-1 to-share-icons">
                                <i className="fa-brands fa-facebook text-primary"></i>
                                <i className="fa-brands fa-facebook-messenger text-primary"></i>
                                <i className="fa-brands fa-twitter text-info"></i>
                                <i className="fa-brands fa-pinterest text-danger"></i>
                                <i className="fa-solid fa-link"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                {/* Mô tả sản phẩm */}
                <div className="mt-5">
                    <h5 className="fw-bold border-bottom pb-2">MÔ TẢ SẢN PHẨM</h5>
                    <h6 className="fw-bold mt-4 mb-2 text-uppercase">Tính năng nổi bật:</h6>
                    <h6 className="fw-semibold">Kết nối không dây độ trễ thấp</h6>
                    <p>
                        Bạn thoải mái sử dụng chế độ không dây lên đến 70 giờ với khả năng vừa sạc vừa sử dụng giúp bạn yên tâm chơi game cả ngày mà không cần phải lo lắng về pin. Tuy nhiên, chúng tôi không khuyến khích chơi game liên tục suốt nhiều ngày như vậy. Bạn cần phải nghỉ ngơi đầy đủ để đảm bảo sức khỏe. Nhờ đi cùng MCU, thuật toán và cảm biến mới nhất, XYZ Wireless dễ dàng chinh phục mốc pin 70 giờ cũng như đạt độ trễ 1ms ổn định với Receiver 2.4Ghz thế hệ mới.
                    </p>
                </div>

                {/* Sản phẩm liên quan */}
                <div className="mt-5">
                    <h4 className="mb-4 border-bottom">Sản phẩm liên quan</h4>
                    <div className="row g-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div className="col-md-3" key={item}>
                                <div className="product-card">
                                    <img
                                        src={`https://via.placeholder.com/300x200?text=SP+${item}`}
                                        className="product-image"
                                        alt={`Sản phẩm ${item}`}
                                    />
                                    <div className="product-info">
                                        <h6 className="product-name mb-1">Tai nghe công nghệ {item}</h6>
                                        <div className="product-price">₫{item}90.000</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;

