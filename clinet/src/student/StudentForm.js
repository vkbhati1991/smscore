import React, { Component } from "react";
import Textbox from "./Textbox";

const staticFields = {
    CASE_SUBJECT: {
        ControlType: 1,
        CanMask: true,
        KeypadType: "text",
        IsReadOnly: false,
        Validations: {
            required: {
                msg: "invalid data"
            }
        },
        IsMandatory: true,
        ControlKey: "CASE_SUBJECT",
        IsHidden: false,
        Caption: "Subject",
        CaptionPosition: 0,
        StartIndex: 0,
        MaskLength: 0,
        Value: ""
    },
    CASE_PHONE: {
        ControlType: 1,
        CanMask: true,
        KeypadType: "text",
        IsReadOnly: false,
        Validations: {
            required: {
                msg: "invalid phone no"
            }
        },
        IsMandatory: true,
        ControlKey: "CASE_PHONE",
        IsHidden: false,
        Caption: "Subject",
        CaptionPosition: 0,
        StartIndex: 0,
        MaskLength: 0,
        Value: ""
    }
}

class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Fields: staticFields
        }
    }

    applyValidation = (value) => {
        return { ValidationResult: value.length < 2 ? true : false }

    }


    setValue = (controlKey, controlValue) => {

        const fieldCollection = { ...this.state.Fields };
        let control = fieldCollection[controlKey];

        fieldCollection[controlKey] = Object.assign({}, { ...control }, { Value: controlValue });

        this.setState({
            Fields: fieldCollection
        })

    }

    handleSubmit = () => {

        let isValidForm = undefined;
        const fieldCollection = { ...this.state.Fields };
        const fieldKeysArray = Object.keys(this.state.Fields);

        fieldKeysArray.forEach((controlKey) => {
            const control = fieldCollection[controlKey];
            const controlValue = control.Value;
            const validateField = this.applyValidation(controlValue);

            if (validateField) {
                fieldCollection[controlKey] = Object.assign({}, { ...control }, { ...validateField });
                if ((typeof isValidForm === "undefined") || isValidForm === true) {
                    isValidForm = !validateField.ValidationResult;
                }
            }
        });

        this.setState({
            Fields: fieldCollection
        })

        console.log(isValidForm);
        if (isValidForm) {
            //Post Data
        }

    }


    getButton = () => {
        if (this.props.btntype === "update") {
            return <button onClick={this.handleUpdate} type="submit" className="btn btn-primary">Update</button>
        }

        return <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
    }

    render() {
        return (
            <div className="form-container">
                <div className="form-box">
                    <div className="form-row">
                        <div className="form-group col">
                            <label>salutation</label>
                            <Textbox
                                setValue={this.setValue}
                                {...this.state.Fields["CASE_SUBJECT"]}
                            />
                        </div>
                        <div className="form-group col">
                            <label>salutation</label>
                            <Textbox
                                setValue={this.setValue}
                                {...this.state.Fields["CASE_PHONE"]}
                            />
                        </div>
                    </div>
                    {this.getButton()}
                </div>
            </div>
        )
    }
}

export default StudentForm;