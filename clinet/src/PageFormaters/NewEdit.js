import React, { Component } from "react";
import propTypes from "prop-types";
import ObjectForm from "../Form/ObjectForm";
import PageHeader from "../Components/PageHeader";

export default class NewEdit extends Component {

    static propTypes = {
        pageHeader: propTypes.object,
        fields: propTypes.object,
        layoutJson: propTypes.object
    }

    constructor(props) {
        super(props);

    }


    render() {
        const { pageHeader, fields, layoutJson } = this.props;
        return (
            <div className="app-content-container">
                <PageHeader {...pageHeader} />
                <div className="home-page-listing">
                    <ObjectForm fields={fields} layoutJson={layoutJson} />
                </div>
            </div>
        );
    }
}
