import styles from "../assets/css/auth.module.css";
import { useEffect, React } from "react";

function ForgotPassword() {
    useEffect(() => {
        document.body.classList.add(`${styles["auth-body"]}`);
        return () => {
            document.body.classList.remove(`${styles["auth-body"]}`);
        };
    }, []);
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12">
                    <div className={styles["login-container"]}>
                        <div className="row g-0">
                            <div className={`col-lg-7 ${styles["login-form-side"]}`}>
                                <div className={`${styles["glowing-element"]} ${styles["glow-1"]}`}></div>

                                <div className={`${styles.logo} text-center mb-4`}>
                                    <h1 className={styles["gaming-brand"]}>
                                        HIEU <span>GAMING GEAR</span>
                                    </h1>
                                    <p className={styles["gaming-slogan"]}>
                                        Nâng tầm trải nghiệm của bạn
                                    </p>
                                </div>

                                <h3 className="mb-4 text-center">Quên Mật Khẩu</h3>
                                <form>
                                    <div className={styles["input-icon-wrapper"]}>
                                        <i className={`fas fa-envelope ${styles["input-icon"]}`}></i>
                                        <input
                                            type="email"
                                            className={`form-control ${styles["form-control"]}`}
                                            id="email"
                                            placeholder="Nhập email của bạn"
                                        />
                                    </div>

                                    <button type="submit" className={`btn btn-red w-100 ${styles["btn-red"]}`}>
                                        <i className="fas fa-paper-plane me-2"></i> Gửi yêu cầu
                                    </button>
                                </form>

                                <div className={styles["login-divider"]}>
                                    <span>hoặc</span>
                                </div>

                                <p className={`text-center ${styles["register-text"]}`}>
                                    Nhớ mật khẩu?{" "}
                                    <a href="#" className={styles["register-link"]}>
                                        Đăng nhập
                                    </a>
                                </p>

                                <div className={`${styles["glowing-element"]} ${styles["glow-2"]}`}></div>
                            </div>

                            <div className="col-lg-5 d-none d-lg-block">
                                <div className={styles["image-side"]}>
                                    <div className={styles["animated-bg"]}></div>
                                    <div className={styles["image-side-content"]}>
                                        <h2 className="mb-3">Hỗ trợ lấy lại mật khẩu</h2>
                                        <p>
                                            Nhập email đã đăng ký để nhận hướng dẫn đặt lại mật khẩu.
                                        </p>
                                        <div className="mt-4">
                                            <i className="fas fa-envelope-open-text fa-2x me-3"></i>
                                            <i className="fas fa-unlock-alt fa-2x me-3"></i>
                                            <i className="fas fa-user-shield fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;