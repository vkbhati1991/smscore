import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Textbox extends Component {

    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        inputClass: PropTypes.string,
        placeholder: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        onKeyDown: PropTypes.func,
        onKeyUp: PropTypes.func,
        disabled: PropTypes.bool,
        onKeyPress: PropTypes.func,
        onClick: PropTypes.func,
        inputRef: PropTypes.func,
        setValue: PropTypes.func,
        controlKey: PropTypes.string,
        ValidationResult: PropTypes.bool,
        type: PropTypes.string,
        maxLength: PropTypes.number,
        validations: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    inputRefFun = () => {
        if (this.props.inputRef) { this.props.inputRef(this.inputRef); }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        if (this.props.setValue) {
            this.props.setValue(this.props.controlKey, value);
        }
    }

    getClassName = () => {

        return this.props.ValidationResult ? "form-control is-invalid" : "form-control";
    }

    render() {
        return (
            <div className="form-element__control">
                <div className="input-group">
                    <input
                        key={`input-${this.props.name}`}
                        type={this.props.type}
                        id={this.props.id}
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.handleChange}
                        placeholder={this.props.placeholder}
                        className={this.getClassName()}
                        readOnly={this.props.disabled}
                        maxLength={300}
                        ref={this.inputRefFun}

                    />
                </div>
                <div className="form-control--help has-error">
                    {this.props.validations && this.props.validations.required.msg}
                </div>
            </div>
        );
    }
}
