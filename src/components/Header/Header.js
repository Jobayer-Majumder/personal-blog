import React from 'react';
import logo from '../../images/brand-log.png';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img src={logo} className={styles.brandLogo} alt="brand-logo" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link me-3 fw-bold" href="#">Home</a>
                            <a class="nav-link me-3 fw-bold" href="#">Features</a>
                            <a class="nav-link me-3 fw-bold" href="#">Pricing</a>
                            <Link to='/login'>
                                <button className={`fw-bold btnBrand`}>Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;