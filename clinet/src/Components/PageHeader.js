import React, { Component } from "react";
import propTypes from "prop-types";

class PageHeader extends Component {

    static propTypes = {
        title: propTypes.string,
        subtitle: propTypes.string,
        desc: propTypes.string,
        action: propTypes.array
    }


    getButtonlist = (actionArray) => {
        if (actionArray.length === 0) {
            return;
        }

        return actionArray.map((action, idx) => {
            return (
                <a href={action.url} key={idx}
                    className="button button--outline-brand ttc no-underline">{action.text}</a>
            );
        });
    }

    render() {
        const { title, subtitle, desc, action } = this.props;
        return (
            <div className="page-header bg-near-white bb b--light-gray pa-16 flex items-center justify-between" style={{ display: "none" }}>
                <div className="page-header-content flex items-center flex-1">
                    <div className="page-header-content__media wt-3 min-wt-3 ht-3 bg-teal mid br4">
                        <i className="icon-add_box f32 white" />
                    </div>
                    <div className="page-header-content__text ph-16">
                        <div className="page-content-title f12 ff-bold ttu gray">{title}</div>
                        <div className="page-content-title f16 ff-bold primary ttu pv-6">{subtitle}</div>
                        <div className="page-content-content f14 gray ttc pt-4">{desc}</div>
                    </div>

                </div>
                <div className="page-header-actions button-group">{this.getButtonlist(action)}</div>
            </div>
        );
    }
}


export default PageHeader;
