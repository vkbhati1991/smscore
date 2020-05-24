import React from "react";
import propTypes from "prop-types";
import AppHeaderOtherSearch from "./AppHeaderOtherSearch";
import { AppHeaderOtherHelp } from "./AppHeaderOtherHelp";
import { AppHeaderOtherAlert } from "./AppHeaderOtherAlert";
import { AppHeaderOtherProfile } from "./AppHeaderOtherProfile";

export default class AppHeaderOther extends React.Component {
    static propTypes = {
        setSearchOpen: propTypes.func,
        isSearchOpen: propTypes.bool
    }
    render() {
        return (
            <div className="app-header__other flex">
                <AppHeaderOtherSearch isSearchOpen={this.props.isSearchOpen} setSearchOpen={this.props.setSearchOpen} />
                <AppHeaderOtherHelp />
                <AppHeaderOtherAlert />
                <AppHeaderOtherProfile />
            </div>
        );
    }
}
