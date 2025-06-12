import React from "react";

function Header() {
    return (
        <header className="navbar">
            <div className="container d-flex justify-content-between align-items-center">
            <div className="logo"><a href="/">HGMG</a></div>
            <form className="search-bar d-none d-lg-block" action="/search" method="GET" style={{ maxWidth: "400px", width: "100%", margin: "0 2rem" }}>
                <div className="input-group">
                <input type="text" className="form-control" placeholder="Tìm kiếm sản phẩm..." name="q"/>
                <button className="btn-search" type="submit">
                    <i className="fas fa-search"></i>
                </button>
                </div>
            </form>
            <div className="icons">
                <a href="#" className="me-3">
                <i className="fas fa-shopping-cart"></i>
                </a>
                <a href="#">
                <i className="fas fa-user"></i>
                </a>
            </div>
            </div>
        </header>
    );
}
export default Header;