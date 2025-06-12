import React from "react";

function Checkout() {
    return (
        <>
            <section className="bg-light py-5">
                <div className="container mt-5">
                    <div className="row mt-5">
                        {/* Phương thức giao hàng & thanh toán */}
                        <div className="col-lg-8">
                            <h5 className="fw-bold">Phương thức vận chuyển</h5>
                            <div className="border p-3 rounded mb-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="shipping" id="ship-home" defaultChecked />
                                    <label className="form-check-label" htmlFor="ship-home">
                                        Giao hàng tận nơi <span className="ms-2">0₫</span>
                                    </label>
                                </div>
                            </div>

                            <h5 className="fw-bold">Phương thức thanh toán</h5>
                            <div className="border p-3 rounded mb-3">
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="radio" name="payment" id="bank" defaultChecked />
                                    <label className="form-check-label" htmlFor="bank">
                                        <i className="fa-solid fa-building-columns me-2"></i>Chuyển khoản qua ngân hàng
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="payment" id="cod" />
                                    <label className="form-check-label" htmlFor="cod">
                                        <i className="fa-solid fa-truck me-2"></i>Thanh toán khi giao hàng (COD)
                                    </label>
                                </div>
                            </div>

                            <div className="border p-3 rounded small text-muted">
                                <ul className="mb-0">
                                    <li>Hieu Gaming Gear sẽ liên hệ quý khách sớm nhất có thể.</li>
                                    <li>Sau khi xác minh xong đơn hàng, Hieu Gaming Gear sẽ chuyển hàng cho quý khách qua dịch vụ chuyển phát nhanh.</li>
                                    <li>Quý khách nhận hàng và thanh toán tiền trực tiếp cho người giao hàng.</li>
                                    <li>Trong quá trình chuyển hàng từ Hieu Gaming Gear tới quý khách, mọi rủi ro đều do Hieu Gaming Gear chịu trách nhiệm, đảm bảo hàng hóa đến tay quý khách nguyên vẹn, mới 100%, đầy đủ và an toàn.</li>
                                </ul>
                            </div>

                            <button className="btn btn-danger mt-4">Hoàn tất đơn hàng</button>
                        </div>

                        {/* Tổng hợp đơn hàng */}
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <img src="https://via.placeholder.com/60" alt="product" />
                                        <span>Chuột Pulsar X2 Wireless - Red</span>
                                        <span className="fw-bold">₫1,890,000</span>
                                    </div>

                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Mã giảm giá" />
                                        <button className="btn btn-outline-secondary">Sử dụng</button>
                                    </div>

                                    <p className="d-flex justify-content-between">
                                        <span>Tạm tính</span>
                                        <span>₫1,890,000</span>
                                    </p>
                                    <p className="d-flex justify-content-between">
                                        <span>Phí vận chuyển</span>
                                        <span>Miễn phí</span>
                                    </p>
                                    <hr />
                                    <p className="d-flex justify-content-between fw-bold">
                                        <span>Tổng cộng</span>
                                        <span className="text-danger">₫1,890,000</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Checkout;