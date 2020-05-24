import React, { Component } from "react";
import "../vendor/vs-react-data-grid/GridCss.css";
//import ReactGrid from "../vendor/vs-react-data-grid/Grid/ReactGrid";

class AllStudents extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedIndexes: [],
            metaData: null
        };
    }

    render () {
       // const { metaData } = this.state;

        return (

            <div className="">
                <div className="px-3 py-3 pageHeader">
                    <div className="pageHeader-title">User</div>
                    <a className="btn btn-primary" href="/home">Add</a>
                </div>
                <div className="data-table">
                    {/* <ReactGrid
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

                        }} /> */}
                </div>
            </div>
        );
    }
}

export default AllStudents;
