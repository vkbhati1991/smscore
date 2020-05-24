import React, { Component } from "react";
import propTypes from "prop-types";
import AppNav from "../AppNav/index";
import { AppLogo } from "./AppLogo";
import { ClientLogo } from "./ClientLogo";
import AppHeaderContent from "./AppHeaderContent";
import AppHeaderOther from "./AppHeaderOther";

export default class AppHeader extends Component {

    static propTypes = {
        appNav: propTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            isSearchOpen: false
        };
    }

    setSearchOpen = () => {
        this.setState({
            isSearchOpen: !this.state.isSearchOpen
        });
    }

    render() {

        return (
            <div className="app-header-row dn">
                <div className="app-header bb b--light-gray">
                    <AppLogo />
                    <ClientLogo />
                    <AppHeaderContent isSearchOpen={this.state.isSearchOpen} />
                    <AppHeaderOther isSearchOpen={this.state.isSearchOpen} setSearchOpen={this.setSearchOpen} />
                </div>
                <AppNav appNav={this.props.appNav} />
            </div>
        );
    }
}
