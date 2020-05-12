/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { string, objectOf, bool } from 'prop-types';
import HelperUi from '../HelperUi';
import TextFieldUi from '../TextFieldUi';
import './TextFieldHelper.scss';

export default function TextFieldHelper({
  name,
  placeholder,
  className,
  helper,
  htmlFor,
  labelId,
  state,
  style,
  disabled,
  value,
  required,
  ...props
}) {
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
  const disabledState = disabled ? 'disabled' : '';
  const classes = [
    'rex-text-field-helper',
    className,
    stateClass,
    disabledState,
  ]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const helperEl = useRef(null);
  const handleOnFocus = e => {
    const textFieldNativeEl = e.target.parentNode;
    const outsideBorderEl = e.target.parentNode.parentNode;

    if (!disabled) {
      helperEl.current.classList.add('active');
      textFieldNativeEl.classList.add('active');
      outsideBorderEl.classList.add('active');
    }
  };
  const handleOnBlur = e => {
    const textFieldNativeEl = e.target.parentNode;
    const outsideBorderEl = e.target.parentNode.parentNode;

    if (!disabled) {
      helperEl.current.classList.remove('active');
      textFieldNativeEl.classList.remove('active');
      outsideBorderEl.classList.remove('active');
    }
  };

  return (
    <div className={classes} style={style} {...props}>
      <TextFieldUi
        id={htmlFor}
        labelId={labelId}
        name={name}
        placeholder={placeholder}
        state={state}
        disabled={disabled}
        handleOnFocus={handleOnFocus}
        handleOnBlur={handleOnBlur}
        value={value}
        required={required}
      />
      <HelperUi
        helper={helper}
        state={state}
        helperRef={helperEl}
        disabled={disabled}
      />
    </div>
  );
}

TextFieldHelper.defaultProps = {
  className: '',
  helper: '',
  htmlFor: '',
  name: '',
  placeholder: '',
  state: '',
  labelId: '',
  style: null,
  disabled: false,
  value: '',
  required: false,
};

TextFieldHelper.propTypes = {
  className: string,
  helper: string,
  htmlFor: string,
  name: string,
  placeholder: string,
  state: string,
  labelId: string,
  style: objectOf(string),
  disabled: bool,
  value: string,
  required: bool,
};
