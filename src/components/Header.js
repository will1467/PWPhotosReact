import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
function Header() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Philip Wrigley's Photos</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Home <span className="sr-only">(current)</span> </Link>
                        </li>
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Categories<span className="caret"></span> </button>
                            <div className="dropdown-menu">
                                <li className="dropdown-item"> <Link to="/category1">Categories</Link> </li>
                                <li className="dropdown-item"> <Link to="/category1">Categories</Link> </li>
                                <li className="dropdown-item"> <Link to="/category1">Categories</Link> </li>
                            </div>
                        </div>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default Header;
