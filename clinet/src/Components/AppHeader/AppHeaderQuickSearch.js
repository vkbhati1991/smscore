import React from "react";

export const AppHeaderQuickSearch = () => {
    return (
        <div className="app-header__search ht-3 mid ph-32">
            <div className="header-search flex">
                <div className="input-group">
                    <select className="form-control wt-10 max-wt-10">
                        <option selected>All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <input type="text" placeholder="Search" className="form-control" />
                    <div className="input-group__append">
                        <span className="picker-icon"><i className="icon-search f20 secondary" /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
