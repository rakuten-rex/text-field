/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { string, objectOf, bool, func } from 'prop-types';
import CheckIconPath from '../assets/check_large.svg';
import WarningIconPath from '../assets/warning_large.svg';
import './TextFieldUi.scss';

class TextFieldUi extends Component {
  constructor(props) {
    super(props);

    const { value } = this.props;
    this.state = { textValue: value };

    this.updateValue = this.updateValue.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if (value !== prevProps.value) {
      this.updateValue(value);
    }
  }

  updateValue(textValue) {
    this.setState({
      textValue,
    });
  }

  handleOnChange(e) {
    this.updateValue(e.target.value);
  }

  render() {
    const {
      name,
      placeholder,
      className,
      htmlFor,
      state,
      label,
      labelId,
      id,
      style,
      disabled,
      handleOnFocus,
      handleOnBlur,
      value,
      required,
      ...props
    } = this.props;
    const { textValue } = this.state;
    const stateClass = (stateClassName => {
      switch (stateClassName) {
        case 'error':
          return 'error';
        case 'valid':
          return 'valid';
        case 'active':
          return 'active';
        case 'hover':
          return 'hover';
        default:
          return '';
      }
    })(state);
    const borderClasses = ['rex-text-field-ui', className, stateClass]
      .filter(singleClass => singleClass && singleClass.length > 0)
      .join(' ')
      .trim();
    const inputClasses = ['rex-text-field-native', stateClass].join(' ').trim();
    const hasLabel = !!(label && label.length > 0);
    const innerClasses = ['rex-text-field-inner-border', stateClass]
      .join(' ')
      .trim();
    const withIcon = state === 'error' || state === 'valid';
    const renderIcon = () => {
      if (state === 'error') {
        return <WarningIconPath className="rex-icon" />;
      }
      return <CheckIconPath className="rex-icon" />;
    };

    return (
      <div className={borderClasses} style={style} disabled={disabled}>
        <div className={innerClasses}>
          <input
            type="text"
            id={id}
            className={inputClasses}
            name={name}
            placeholder={placeholder}
            aria-label={!hasLabel ? name || placeholder : null}
            aria-labelledby={hasLabel ? labelId : null}
            onChange={this.handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            disabled={disabled}
            value={textValue}
            required={required}
            {...props}
          />
          {withIcon && renderIcon()}
        </div>
      </div>
    );
  }
}

TextFieldUi.defaultProps = {
  name: '',
  placeholder: '',
  className: '',
  htmlFor: '',
  state: '',
  label: '',
  labelId: '',
  id: null,
  style: {},
  disabled: false,
  handleOnFocus: () => {},
  handleOnBlur: () => {},
  value: '',
  required: false,
};

TextFieldUi.propTypes = {
  name: string,
  placeholder: string,
  className: string,
  htmlFor: string,
  state: string,
  label: string,
  labelId: string,
  id: string,
  style: objectOf(string),
  disabled: bool,
  handleOnFocus: func,
  handleOnBlur: func,
  value: string,
  required: bool,
};

export default TextFieldUi;
