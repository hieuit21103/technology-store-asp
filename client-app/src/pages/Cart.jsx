import React from "react";

function Cart() {
    return (
        <>
            <section className="bg-light py-5">
                <div className="container mt-5">
                    <div className="row mt-5">
                        {/* Danh sách sản phẩm */}
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-header fw-bold">Giỏ hàng của bạn</div>
                                <div className="card-body">
                                    <p>Bạn đang có <strong>1 sản phẩm</strong> trong giỏ hàng</p>
                                    <div className="d-flex align-items-center justify-content-between border rounded p-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://via.placeholder.com/100x100"
                                                alt="product"
                                                className="me-3"
                                            />
                                            <div>
                                                <div className="fw-semibold">Chuột Pulsar X2 Wireless - Red</div>
                                                <div>
                                                    <span className="text-danger fw-bold">₫1,890,000</span>
                                                    <del className="ms-2 text-muted">₂₋490,000₫</del>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button className="btn btn-outline-danger btn-sm">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <input
                                                type="text"
                                                className="form-control mx-2 text-center"
                                                value="1"
                                                style={{ width: "60px" }}
                                                readOnly
                                            />
                                            <button className="btn btn-outline-danger btn-sm">
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Ghi chú đơn hàng</label>
                                        <textarea className="form-control" rows="3" placeholder="Ghi chú thêm..."></textarea>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="invoice" />
                                        <label className="form-check-label" htmlFor="invoice">
                                            Xuất hoá đơn cho đơn hàng
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Thông tin đơn hàng */}
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <div className="card-header fw-bold">Thông tin đơn hàng</div>
                                <div className="card-body">
                                    <p className="d-flex justify-content-between">
                                        <span>Tổng tiền:</span>
                                        <span className="text-danger fw-bold">₫1,890,000</span>
                                    </p>
                                    <ul className="small">
                                        <li>Phí vận chuyển sẽ được tính ở trang thanh toán.</li>
                                        <li>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</li>
                                    </ul>
                                    <button className="btn btn-danger w-100 fw-bold mt-2">THANH TOÁN</button>
                                </div>
                            </div>
                            <div className="alert alert-info small">
                                <strong>Chính sách mua hàng:</strong> Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị tối thiểu 0₫ trở lên.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;