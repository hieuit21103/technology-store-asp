import styles from "../assets/css/auth.module.css";
import { useEffect, React } from "react";

function Login() 
{
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

                        <h3 className="mb-4 text-center">Đăng Nhập</h3>
                        <form>
                        <div className={styles["input-icon-wrapper"]}>
                            <i className={`fas fa-envelope ${styles["input-icon"]}`}></i>
                            <input
                            type="email"
                            className={`form-control ${styles["form-control"]}`}
                            id="email"
                            placeholder="Email hoặc tên đăng nhập"
                            />
                        </div>

                        <div className={styles["input-icon-wrapper"]}>
                            <i className={`fas fa-lock ${styles["input-icon"]}`}></i>
                            <input
                            type="password"
                            className={`form-control ${styles["form-control"]}`}
                            id="password"
                            placeholder="Mật khẩu"
                            />
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="rememberMe"
                            />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Ghi nhớ đăng nhập
                            </label>
                            </div>
                            <a href="#" className={styles["forgot-password"]}>
                            Quên mật khẩu?
                            </a>
                        </div>

                        <button type="submit" className={`btn btn-red w-100 ${styles["btn-red"]}`}>
                            <i className="fas fa-sign-in-alt me-2"></i> Đăng Nhập
                        </button>
                        </form>

                        <div className={styles["login-divider"]}>
                        <span>hoặc đăng nhập với</span>
                        </div>

                        <div className={`${styles["social-login"]} d-flex justify-content-center`}>
                        <a href="#" className={`${styles["social-btn"]} ${styles.facebook}`}>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className={`${styles["social-btn"]} ${styles.google}`}>
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className={`${styles["social-btn"]} ${styles.discord}`}>
                            <i className="fab fa-discord"></i>
                        </a>
                        </div>

                        <p className={`text-center ${styles["register-text"]}`}>
                        Chưa có tài khoản?{" "}
                        <a href="#" className={styles["register-link"]}>
                            Đăng ký ngay
                        </a>
                        </p>

                        <div className={`${styles["glowing-element"]} ${styles["glow-2"]}`}></div>
                    </div>

                    <div className="col-lg-5 d-none d-lg-block">
                        <div className={styles["image-side"]}>
                        <div className={styles["animated-bg"]}></div>
                        <div className={styles["image-side-content"]}>
                            <h2 className="mb-3">Chào mừng game thủ!</h2>
                            <p>
                            Đăng nhập để tiếp cận các thiết bị gaming chất lượng cao với giá
                            ưu đãi và nhiều khuyến mãi hấp dẫn.
                            </p>
                            <div className="mt-4">
                            <i className="fas fa-headset fa-2x me-3"></i>
                            <i className="fas fa-keyboard fa-2x me-3"></i>
                            <i className="fas fa-mouse fa-2x"></i>
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

export default Login;