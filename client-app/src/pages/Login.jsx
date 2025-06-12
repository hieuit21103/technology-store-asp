import styles from "../assets/css/auth.module.css";
import React, { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        document.body.classList.add(`${styles["auth-body"]}`);
        return () => {
            document.body.classList.remove(`${styles["auth-body"]}`);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");


        if (!username || !password) {
            setError("Vui lòng điền đầy đủ thông tin đăng nhập.");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    username, 
                    password }),
            });

            if(!response.ok){
                const text = await response.text();
                setError(`Đăng nhập không thành công: ${text}`);
                return;
            }

            const result = await response.text();
            setSuccess("Đăng nhập thành công!");
            console.log("Login successful:", result);
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        } catch (err) {
            console.error("Login error:", err);
            setError("Đăng nhập không thành công. Vui lòng thử lại.");
        }
    }

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
                                <form onSubmit={handleSubmit}>
                                    <div className={styles["input-icon-wrapper"]}>
                                        <i className={`fas fa-user ${styles["input-icon"]}`}></i>
                                        <input
                                            type="text"
                                            className={`form-control ${styles["form-control"]}`}
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Tài khoản"
                                        />
                                    </div>

                                    <div className={styles["input-icon-wrapper"]}>
                                        <i className={`fas fa-lock ${styles["input-icon"]}`}></i>
                                        <input
                                            type="password"
                                            className={`form-control ${styles["form-control"]}`}
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Mật khẩu"
                                        />
                                    </div>

                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input border-dark bg-dark rounded-0"
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

                                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                                    {success && <div className="alert alert-success mt-3">{success}</div>}
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
                                    <a href="/register" className={styles["register-link"]}>
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