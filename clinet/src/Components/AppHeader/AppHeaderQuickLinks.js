import React from "react";

export const AppHeaderQuickLinks = () => {
    return (
        <div className="app-header__quicklink ht-3 ph-32 flex items-center">
            <div className="quicklink__item flex items-center">
                <i className="quicklink__media f24 mr2  icon-school orange" />
                <span className="quicklink__text orange ff-bold">Addmission</span>
            </div>
            <div className="quicklink__item flex items-center">
                <i className="quicklink__media f24 mr2  icon-menu_book purple" />
                <span className="quicklink__text purple ff-bold">Academic Year: 2018-2019</span>
            </div>
            <div className="quicklink__item flex items-center">
                <i className="quicklink__media f24 mr2  icon-perm_contact_calendar green" />
                <span className="quicklink__text green ff-bold">Financial Year: 2018-2019</span>
            </div>
        </div>
    );
};
