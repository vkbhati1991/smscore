import React, { useState } from "react";


const appHeaderProfileDropDown = (open) => {

    const classNameValue = open ? "dropdown profile-dropdown isActive" : "dropdown profile-dropdown";

    return (
        <div className={classNameValue}>
            <div className="profile-content flex items-center">
                <div className="profile__media wt-4 ht-4 min-wt-4 br-pill">
                    <img src="http://localhost:5000/images/businessman.png" alt="profile" className="wt-4" />
                </div>
                <div className="profile__text">
                    <div className="user-name truncate ff-bold f18">Vinod Singh</div>
                    <div className="user-profile truncate mt2 secondary">Admin</div>
                </div>
            </div>
            <div className="profile-links bt b--moon-gray mt3 pt3">
                <a className="profile-link db no-underline f16 ff-medium brand pb3" href="">
                    Profile</a>
                <a className="profile-link db no-underline f16 ff-medium brand pb3" href="">
                    Setting</a>
            </div>
            <div className="profile-links bt b--moon-gray pt3">
                <a className="profile-link db no-underline f16 ff-medium red" href="">Logout</a>
            </div>
        </div>
    );
};

export const AppHeaderOtherProfile = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="app-header__profile relative wt-3 ht-3 min-wt-3 mid pointer bl b--light-gray">
            <div
                onClick={() => { setOpen(!open); }}
                className="header-profile titlePopper"
                data-attr="Profile">
                <img src="http://localhost:5000/images/man.png" alt="profile" className="wt-2" />
            </div>
            {appHeaderProfileDropDown(open)}
        </div >
    );
};


