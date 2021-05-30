import React from 'react';
import logo from '../../images/brand-log.png';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const user = useSelector(state => state.user.user);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className={styles.brandLogo} alt="brand-logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link me-3 fw-bold" to="/">Home</Link>
                            <Link className="nav-link me-3 fw-bold" to="/">Features</Link>
                            <Link className="nav-link me-3 fw-bold" to="/">Pricing</Link>
                            <Link to='/login'>
                                {
                                    user?.email ? <button className={`fw-bold btnBrand`}>{user?.name}</button>
                                        : <button className={`fw-bold btnBrand`}>Login</button>
                                }

                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;