import React, { Component } from "react";
import propTypes from "prop-types";
import Home from "../PageFormaters/Home";
import HomeListing from "../PageFormaters/HomeListing";
import NewEdit from "../PageFormaters/NewEdit";

export default class AppContent extends Component {

    static propTypes = {
        pageType: propTypes.number,
        pageModel: propTypes.object
    }

    constructor(props) {
        super(props);
    }

    getPageContent = (pageContnetType) => {
        switch (pageContnetType) {
            case 0:
                return <Home {...this.props.pageModel} />;
            case 1:
                return <HomeListing {...this.props.pageModel} />;
            case 2:
                return <NewEdit {...this.props.pageModel} />;
            default:
                return <Home {...this.props.pageModel} />;
        }
    }

    render() {

        return (
            <div className="app-content">{this.getPageContent(this.props.pageType)}</div>
        );
    }
}
