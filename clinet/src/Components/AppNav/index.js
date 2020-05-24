import React, { Component } from "react";
import propTypes from "prop-types";

export default class AppNav extends Component {

    static propTypes = {
        appNav: propTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            appNav: props.appNav
        };
    }

    getAppNav = () => {
        const { appNav } = this.state;
        const { data, currentTab } = appNav;

        if (data && data.length === 0) {
            return null;
        }

        return data.map((n, i) => {
            return <NavItemParent currentTab={currentTab} {...n} key={i} />;
        });
    }

    render() {

        return (
            <div className="app-nav ph-16">
                <ul className="nav-list">
                    {this.getAppNav()}
                </ul>
            </div>
        );
    }
}

class NavItemParent extends Component {

    static propTypes = {
        text: propTypes.string,
        childs: propTypes.array,
        icon: propTypes.string,
        currentTab: propTypes.string,
        id: propTypes.string
    }

    render() {
        const { text, childs, currentTab, id } = this.props;

        const navItemClass = currentTab === id ? "nav-link isActive" : "nav-link";
        return (
            <li className="nav-list__item">
                <div className="nav-item--parent">
                    <a className={navItemClass}>
                        <span className="nav-link__text ff-medium f15 secondary">{text}</span>
                    </a>
                </div>
                {childs && <NavItemChild childArray={childs} />}
            </li>
        );
    }   
}

class NavItemChild extends Component {

    static propTypes = {
        childArray: propTypes.array
    }

    render() {
        const { childArray } = this.props;

        if (childArray && childArray.length === 0) {
            return null;
        }

        return (
            <div className="nav-item--child">
                <div className="nav-item--child-item">
                    {
                        childArray.map((item, i) => {
                            return (
                                <a key={i} className="nav-child-link" href={item.hrefUrl}>
                                    <i className="nav-child-link__media" />
                                    <span className="nav-child-link__text">{item.text}</span>
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
