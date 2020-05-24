import React, { Component } from "react";
import propTypes from "prop-types";
import AppContent from "./AppContent";

export default class AppBody extends Component {

    static propTypes = {
        appBody: propTypes.object
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { appBody } = this.props;
        return (
            <div className="app-body-container">
                <AppContent {...appBody} />
            </div>
        );
    }
}
