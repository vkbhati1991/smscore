import React, { Component } from "react";
import propTypes from "prop-types";

class FormLayout extends Component{
    render(){
        return sections.map((section, sectionIdx) => {
            return (<div key={sectionIdx} className="section">
                {
                    section.sectionRows.map((row, rowIdx) => {
                        return (
                            <div key={rowIdx} className="grd-row">
                                {
                                    row.sectionCells.map((cell, cellIdx) => {
                                        const control = fields[cell.controlKey];
                                        return (
                                            <div key={cellIdx} className="grd-col ph-16 pv-12">
                                                <label className="secondary f16 form-elemet__label">
                                                    {control && control.caption}:</label>
                                                <Textbox
                                                    setValue={this.setValue}
                                                    {...control}
                                                />
                                            </div>
                                        );
                                    })
                                }

                            </div>
                        );
                    })
                }

            </div>);
        });
    }
}

export default FormLayout;