import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/home">CRMNEXT</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/students">List</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default NavBar;