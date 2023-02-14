import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Osvaldo Salomon</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/osvaldo-salomon-vazquez-0bb163230/"
                       className="footer__social-link" target="_blank">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://github.com/OsvaldoSalomon" className="footer__social-link" target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a href="https://medium.com/@osvaldo.salomon" className="footer__social-link" target="_blank">
                        <i className="uil uil-medium-m"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; Osvaldo Salomon</span>
            </div>
        </footer>
    );
};

export default Footer;
