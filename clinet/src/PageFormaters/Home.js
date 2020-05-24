import React, { Component } from "react";
import propTypes from "prop-types";

export default class Home extends Component {

    static propTypes = {
        title: propTypes.string,
        subtitle: propTypes.string
    }

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="app-content-container">
                <div className="">
                    <h1 className="hd">{this.props.title}</h1>
                    <p className="lead">{this.props.subtitle}</p>
                </div>
            </div>
        );
    }
}
