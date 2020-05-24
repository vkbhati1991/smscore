import React, { Component } from "react";
import propTypes from "prop-types";
import ReactGrid from "../vendor/vs-react-data-grid/Grid/ReactGrid";

export default class HomeListing extends Component {

    static propTypes = {
        pageHeader: propTypes.object,
        listInfo: propTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedIndexes: [],
            rows: props.listInfo.rows,
            columns: props.listInfo.columns
        };
    }

    onRowsSelected = (rows) => {
        this.setState({
            selectedIndexes: this.state.selectedIndexes.concat(
                rows.map(r => r.rowIdx)
            )
        });
    }
    onRowsDeSelected = (rows) => {
        const rowIndexes = rows.map(r => r.rowIdx);
        this.setState({
            selectedIndexes: this.state.selectedIndexes.filter(
                i => rowIndexes.indexOf(i) === -1
            )
        });

    }

    render() {
        const { pageHeader } = this.props;
        const { columns, rows } = this.state;
        return (
            <div className="app-content-container">
                <PageHeader {...pageHeader} />
                <div className="home-page-listing">
                    <ReactGrid
                        columns={columns}
                        rowGetter={i => rows[i]}
                        rowCount={15}
                        actions={false}
                        rowHeight={30}
                        rowSelection={{
                            showCheckbox: true,
                            onRowsSelected: this.onRowsSelected,
                            onRowsDeSelected: this.onRowsDeSelected,
                            selectBy: {
                                indexes: this.state.selectedIndexes
                            }

                        }} />
                </div>
            </div>
        );
    }
}


class PageHeader extends Component {

    static propTypes = {
        title: propTypes.string,
        desc: propTypes.string,
        action: propTypes.array
    }


    getButtonlist = (actionArray) => {
        if (actionArray.length === 0) {
            return;
        }

        return actionArray.map((action, idx) => {
            return (
                <a href={action.url} key={idx} className="btn btn-primary ml-3">{action.text}</a>
            );
        });
    }

    render() {
        const { title, desc, action } = this.props;
        return (
            <div className="page-header">
                <div className="page-header-content">
                    <div className="page-content-title">{title}</div>
                    <div className="page-content-content">{desc}</div>
                </div>
                <div className="page-header-actions">{this.getButtonlist(action)}</div>
            </div>
        );
    }
}
