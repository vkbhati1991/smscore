import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Textbox extends Component {
    constructor(props) {
        super(props);
        
        this.inputRef = React.createRef();
    }

    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.any,
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
        inputRef: PropTypes.func
    }

    inputRefFun = () => {
        if (this.props.inputRef) { this.props.inputRef(this.inputRef); }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        if (this.props.setValue) {
            this.props.setValue(this.props.ControlKey, value);
        }


    }

    getClassName = () => {

        return this.props.ValidationResult ? "form-control is-invalid": "form-control";
    }

    render() {
        return (
            <div>
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
                    maxLength={this.props.maxLength}
                    ref={this.inputRefFun}

                />
                <div className="invalid-feedback">
                    {this.props.Validations.required.msg}
                </div>

            </div>
        )
    }
}