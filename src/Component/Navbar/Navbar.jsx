import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar bg-warning fixed-sticky">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ fontWeight: "900", fontSize: "25px" }} href="#">
                        <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="Logo" width="35" height="32" className="d-inline-block align-text-top mx-2" />
                        Store
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar