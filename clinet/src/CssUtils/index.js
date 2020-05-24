import classnames from "classnames";
import cssConfig from "./CssConfig";

class cssUtil {

    inputGroup = (config) => {
        let inputGroupClass = classnames(cssConfig.inputGroup);

        if (config.IsHidden || config.IsDisplay === false) {
            inputGroupClass = classnames(cssConfig.inputGroup, cssConfig.inputGroupHidden);
        }

        return inputGroupClass;
    }

    inputGroupSm = (config) => {
        const inputGroupCLass = this.inputGroup(config);

        return classnames(inputGroupCLass, cssConfig.inputGroupSm);
    }

    inputGroupLg = (config) => {
        const inputGroupCLass = this.inputGroup(config);

        return classnames(inputGroupCLass, cssConfig.inputGroupLg);
    }

    inputGroupAppend = () => {
        return classnames(cssConfig.inputGroupAppend);
    }

    inputGroupPickerIcon = (extraClass = "") => {
        return classnames(cssConfig.inputGroupPickerIcon, extraClass);
    }

    formControl = (config) => {
        let formControlClass = classnames(cssConfig.formControl);

        if (config.Validations && config.Validations.required) {
            if (companySettings.AstrikSign) {
                formControlClass = classnames(cssConfig.formControl);
            } else {
                formControlClass = classnames(cssConfig.formControl, cssConfig.formControlMandatory);
            }
        }

        if (config.ValidationResult && config.ValidationResult.HasError) {
            formControlClass = classnames(cssConfig.formControl, cssConfig.formControlError);
        }

        return formControlClass;
    }

    formControlHelp() {
        return classnames(cssConfig.formControlHelp, cssConfig.hasError);
    }

    formControlStar() {
        return classnames(cssConfig.formControlStar);
    }
}

export default new cssUtil();