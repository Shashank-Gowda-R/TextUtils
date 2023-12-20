import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { title, nav, mode, toggleMode } = props;
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* {
                            nav.map(x => {
                                return (<li className="nav-item" key={x} >
                                    <Link className="nav-link active" aria-current="page" to="/">{x}</Link>
                                </li>)
                            })
                        } */}
                        <li className="nav-item" key='home' >
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item" key='about' >
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                    {/* <div className="d flex">
                        <div className="bg-primary mx-2 rounded" style={{height:'30px',width:'30px'}}></div>
                    </div> */}
                    <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode === 'light' ? 'dark' : 'light'} Mode</label>
                    </div>

                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    nav: PropTypes.array.isRequired
}

export default Navbar;

