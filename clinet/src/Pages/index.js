import React, { Component } from "react";
import propTypes from "prop-types";
import AppHeader from "../Components/AppHeader/index";
import AppBody from "../Components/AppBody";
import AppFooter from "../Components/AppFooter";

class PageComponent extends Component {

    static propTypes = {
        appHeader: propTypes.array,
        appBody: propTypes.object,
        appNav: propTypes.object,
        appFooter: propTypes.object
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { appHeader, appNav, appFooter, appBody } = this.props;
        return (
            <div className="main-app-container">
                <div className="app-container">
                    <AppHeader appHeader={appHeader} appNav={appNav} />
                    <AppBody appNav={appNav} appBody={appBody} />
                    <AppFooter {...appFooter} />
                </div>
            </div>
        );
    }
}

export default PageComponent;
