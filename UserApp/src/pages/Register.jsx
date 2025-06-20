import styles from "../assets/css/auth.module.css";
import React, { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL
function Register() {
    useEffect(() => {
        document.body.classList.add(`${styles["auth-body"]}`);
        return () => {
            document.body.classList.remove(`${styles["auth-body"]}`);
        };
    }, []);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        if (!username || !email || !password || !confirmPassword) {
            setError("Vui lòng điền đầy đủ thông tin đăng ký.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Mật khẩu và xác nhận mật khẩu không khớp.");
            return;
        }

        const response = await fetch(`${API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });

        if(!response.ok) {
            const text = await response.text();
            setError(`Đăng ký không thành công: ${text}`);
            return;
        }

        const result = await response.text();
        setSuccess("Đăng ký thành công! Vui lòng đăng nhập.");
        console.log("Registration successful:", result);

        setTimeout(() => {
            window.location.href = "/login";
        }, 2000);
    };

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

                                <h3 className="mb-4 text-center">Đăng Ký</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className={styles["input-icon-wrapper"]}>
                                        <i className={`fas fa-user ${styles["input-icon"]}`}></i>
                                        <input
                                            type="text"
                                            className={`form-control ${styles["form-control"]}`}
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Tên đăng nhập"
                                        />
                                    </div>

                                    <div className={styles["input-icon-wrapper"]}>
                                        <i className={`fas fa-envelope ${styles["input-icon"]}`}></i>
                                        <input
                                            type="email"
                                            className={`form-control ${styles["form-control"]}`}
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
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

                                    <div className={styles["input-icon-wrapper"]}>
                                        <i className={`fas fa-lock ${styles["input-icon"]}`}></i>
                                        <input
                                            type="password"
                                            className={`form-control ${styles["form-control"]}`}
                                            id="confirmPassword"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Nhập lại mật khẩu"
                                        />
                                    </div>

                                    <button type="submit" className={`btn btn-red w-100 ${styles["btn-red"]}`}>
                                        <i className="fas fa-user-plus me-2"></i> Đăng Ký
                                    </button>

                                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                                    {success && <div className="alert alert-success mt-3">{success}</div>}
                                </form>

                                <div className={styles["login-divider"]}>
                                    <span>hoặc đăng ký với</span>
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
                                    Đã có tài khoản?{" "}
                                    <a href="/login" className={styles["register-link"]}>
                                        Đăng nhập
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
                                            Đăng ký để tiếp cận các thiết bị gaming chất lượng cao với giá
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

export default Register;