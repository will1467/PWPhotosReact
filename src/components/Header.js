import React, { Fragment } from 'react';
import { NavLink} from 'react-router-dom';
function Header() {

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavLink to="/" className="navbar-brand">Philip Wrigley's Photos</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName='active' className="nav-link"> Home </NavLink>
                        </li>
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Categories<span className="caret"></span> </button>
                            <div className="dropdown-menu">
                                <li className="dropdown-item"> <NavLink to="/category1" activeClassName='active'>Categories</NavLink> </li>
                                <li className="dropdown-item"> <NavLink to="/category1" activeClassName='active'>Categories</NavLink> </li>
                                <li className="dropdown-item"> <NavLink to="/category1" activeClassName='active'>Categories</NavLink> </li>
                            </div>
                        </div>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName='active' className="nav-link">About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default Header;
