

import React from "react";
import propTypes from "prop-types";

export default class AppHeaderOtherSearch extends React.Component {
    static propTypes = {
        setSearchOpen: propTypes.func,
        isSearchOpen: propTypes.bool
    }

    render() {
        const iconClass = this.props.isSearchOpen ? "secondary icon-close f24" : "secondary icon-search f24";
        return (
            <div className="app-header__search  wt-3 ht-3 min-wt-3 mid pointer bl b--light-gray">
                <div onClick={this.props.setSearchOpen} className="header-search-icon titlePopper" data-attr="Search">
                    <i className={iconClass} />
                </div>
            </div>
        );
    }
}
