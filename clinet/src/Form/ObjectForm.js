import React, { Component } from "react";
import propTypes from "prop-types";
import ModalUtil from "../vendor/vs-react-modal-new/Util";
import axios from "axios";
import Textbox from "./FormUtilities/Textbox";

class Form extends Component {

    static propTypes = {
        btntype: propTypes.array,
        fields: propTypes.object,
        layoutJson: propTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            fields: props.fields
        };
    }

    applyValidation = (value) => {
        if (value.length < 4) {
            return { ValidationResult: true };
        }
        return { ValidationResult: false };
    }

    setValue = (controlKey, controlValue) => {

        const fieldCollection = { ...this.state.fields };
        let control = fieldCollection[controlKey];

        fieldCollection[controlKey] = Object.assign({}, { ...control }, { value: controlValue });

        this.setState({
            fields: fieldCollection
        });
    }

    handleSubmit = () => {

        let isValidForm;
        const fieldCollection = { ...this.state.fields };
        const fieldKeysArray = Object.keys(this.state.fields);

        fieldKeysArray.forEach((controlKey) => {
            const control = fieldCollection[controlKey];
            const controlValue = control.value;
            const validateField = this.applyValidation(controlValue);

            if (validateField) {
                fieldCollection[controlKey] = Object.assign({}, { ...control }, { ...validateField });
                if ((typeof isValidForm === "undefined") || isValidForm === true) {
                    isValidForm = !validateField.ValidationResult;
                }
            }
        });

        this.setState({
            fields: fieldCollection
        });

        console.log(isValidForm);
        if (isValidForm) {
            axios.post('http://localhost:5000/smsObject/new/student', this.state).then((response) => {
                if (response.status === 200) {
                    ModalUtil.success("Your Data Has Been Saved Successfully", this.handleWindowReload, {
                        title: "React Modal",
                        maxWidth: 500,
                        header: false,
                        footer: true
                    });
                }
            }).catch(error => {
                ModalUtil.error(error.message, null, {
                    title: "React Modal",
                    maxWidth: 500,
                    header: false,
                    footer: true
                });
            });
        }

    }

    getButton = () => {
        if (this.props.btntype === "update") {
            return <button onClick={this.handleUpdate} type="submit" className="btn btn-primary">Update</button>;
        }

        return <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>;
    }

    getFormLayout = () => {
        const { layoutJson } = this.props;
        const { fields } = this.state;
        const { sections } = layoutJson;
        if (layoutJson.sections && layoutJson.sections.length === 0) {
            return;
        }
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

    render() {

        return (
            <div className="form-container">
                <div className="form-box">
                    {this.getFormLayout()}
                    {this.getButton()}
                </div>
            </div>
        );
    }
}

export default Form;
