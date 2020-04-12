import React, { Fragment } from 'react';
import { NavLink} from 'react-router-dom';
import { CATEGORIES } from '../config.js';

function Header() {

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-headerfooter">
                <NavLink to="/" className="navbar-brand">Philip Wrigley's Photos</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <div className="dropdown">
                            <button className="btn bg-headerfooter dropdown-toggle" data-toggle="dropdown">Categories<span className="caret"></span> </button>
                            <div className="dropdown-menu">
                                {CATEGORIES.map((category, index) => {
                                    return (
                                        <li className="dropdown-item" key={index}>  <NavLink to={`/category/${category.FOLDERID}`} activeClassName='active'>{category.NAME}</NavLink> </li>                                        
                                    )
                                })}
                            </div>
                        </div>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName='active' className="nav-link" style={{padding: "0.375rem 1rem"}}>About Philip</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default Header;
