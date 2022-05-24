import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-uppercase">Sportswear City</h2>
            <hr className="line-break"></hr>
            <p className="copyright">© 2022  |  Mehedi Hassan Rifat  |  Sportswear City</p>
            <div className="d-flex justify-content-center align-items-center">
                <a href="https://www.facebook.com/mehedihassan.refat.3" target="_blank" className="btn ms-1" rel="noreferrer"><i className="fab fa-facebook-f fs-4 text-white"></i></a>
                <a href="https://www.instagram.com/rifat_ahasan/" target="_blank" className="btn ms-1" rel="noreferrer"><i className="fab fa-instagram fs-4 text-white"></i></a>
                <a href="https://twitter.com/Rifat_03" target="_blank" className="btn ms-1" rel="noreferrer"><i className="fab fa-twitter fs-4 text-white"></i></a>
            </div>
        </div>
    );
};

export default Footer;