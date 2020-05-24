import React from "react";
import propTypes from "prop-types";
import { AppHeaderQuickLinks } from "./AppHeaderQuickLinks";
import { AppHeaderQuickSearch } from "./AppHeaderQuickSearch";

export default class AppHeaderContent extends React.Component {
    static propTypes = {
        isSearchOpen: propTypes.bool
    }
    render() {
        const appHeaderContentData = this.props.isSearchOpen ? <AppHeaderQuickSearch /> : <AppHeaderQuickLinks />;
        return (
            <div className="app-header__content" >
                {appHeaderContentData}
            </div>
        );
    }
}
