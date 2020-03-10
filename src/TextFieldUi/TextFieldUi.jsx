/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { string, objectOf, bool, func } from 'prop-types';
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
        default:
          return '';
      }
    })(state);
    const borderClasses = [
      'rex-text-field-ui',
      'rex-text-field-ui-border',
      className,
      stateClass,
    ]
      .filter(singleClass => singleClass && singleClass.length > 0)
      .join(' ')
      .trim();
    const innerClasses = ['rex-text-field-native', stateClass].join(' ').trim();
    const hasLabel = !!(label && label.length > 0);

    return (
      <div className={borderClasses} style={style} disabled={disabled}>
        <input
          type="text"
          id={id}
          className={innerClasses}
          name={name}
          placeholder={placeholder}
          aria-label={!hasLabel ? name || placeholder : null}
          aria-labelledby={hasLabel ? labelId : null}
          onChange={this.handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          disabled={disabled}
          value={textValue}
          {...props}
        />
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
};

export default TextFieldUi;
