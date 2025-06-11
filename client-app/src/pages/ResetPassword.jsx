import styles from "../assets/css/auth.module.css";
import { useEffect, React } from "react";

function ResetPassword() 
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

                        <h3 className="mb-4 text-center">Đặt Lại Mật Khẩu</h3>
                        <form>
                        <div className={styles["input-icon-wrapper"]}>
                            <i className={`fas fa-lock ${styles["input-icon"]}`}></i>
                            <input
                            type="password"
                            className={`form-control ${styles["form-control"]}`}
                            id="newPassword"
                            placeholder="Mật khẩu mới"
                            />
                        </div>

                        <div className={styles["input-icon-wrapper"]}>
                            <i className={`fas fa-lock ${styles["input-icon"]}`}></i>
                            <input
                            type="password"
                            className={`form-control ${styles["form-control"]}`}
                            id="confirmNewPassword"
                            placeholder="Nhập lại mật khẩu mới"
                            />
                        </div>

                        <button type="submit" className={`btn btn-red w-100 ${styles["btn-red"]}`}>
                            <i className="fas fa-sync-alt me-2"></i> Đặt lại mật khẩu
                        </button>
                        </form>

                        <div className={styles["login-divider"]}>
                        <span>hoặc</span>
                        </div>

                        <p className={`text-center ${styles["register-text"]}`}>
                        Đã nhớ mật khẩu?{" "}
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
                            <h2 className="mb-3">Đặt lại mật khẩu mới</h2>
                            <p>
                            Nhập mật khẩu mới cho tài khoản của bạn để tiếp tục sử dụng dịch vụ.
                            </p>
                            <div className="mt-4">
                            <i className="fas fa-key fa-2x me-3"></i>
                            <i className="fas fa-lock-open fa-2x me-3"></i>
                            <i className="fas fa-user-check fa-2x"></i>
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

export default ResetPassword;