import React from "react";

export const AppHeaderOtherHelp = () => {
    return (
        <div className="app-header__alert  wt-3 ht-3 min-wt-3 mid pointer bl b--light-gray">
            <div className="header-alert relative titlePopper" data-attr="Alert">
                <i className="secondary icon-notifications_none f24" />
                <span className="alert-icon bg-red db absolute white ff-medium f13 br2">23</span>
            </div>
        </div>
    );
};
