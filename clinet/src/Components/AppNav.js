import React, { Component } from "react";
import propTypes from "prop-types";

export default class AppNav extends Component {

    static propTypes = {
        appNav: propTypes.array
    }

    constructor(props) {
        super(props);
        this.state = {
            appNav: props.appNav
        };
    }

    getAppNav = () => {
        const { appNav } = this.state;

        if (appNav && appNav.length === 0) {
            return null;
        }

        return appNav.map((navItem, navIdx) => {
            return (<li key={navIdx} className="app-nav-list-item">
                <a className={navItem.isActive ? "app-nav-link isActive" : "app-nav-link"}
                 href={navItem.url}>{navItem.text}</a>
            </ li>);
        });
    }

    render() {

        return (
            <div className="app-nav">
                <ul className="app-nav-list">
                    {this.getAppNav()}
                </ul>
            </div>
        );
    }
}
