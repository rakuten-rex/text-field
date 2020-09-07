/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { string, objectOf, bool, func } from 'prop-types';
import LabelUi from '../LabelUi';
import HelperUi from '../HelperUi';
import TextFieldUi from '../TextFieldUi';
import './TextFieldLabelHelper.scss';

export default function TextFieldLabelHelper({
  name,
  placeholder,
  className,
  label,
  helper,
  htmlFor,
  labelId,
  state,
  style,
  disabled,
  value,
  required,
  inputRef,
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
    'rex-text-field-label-helper',
    className,
    stateClass,
    disabledState,
  ]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const labelEl = useRef(null);
  const helperEl = useRef(null);
  const handleOnFocus = e => {
    const textFieldNativeEl = e.target.parentNode;
    const outsideBorderEl = e.target.parentNode.parentNode;

    if (!disabled) {
      labelEl.current.classList.add('active');
      helperEl.current.classList.add('active');
      textFieldNativeEl.classList.add('active');
      outsideBorderEl.classList.add('active');
    }
  };
  const handleOnBlur = e => {
    const textFieldNativeEl = e.target.parentNode;
    const outsideBorderEl = e.target.parentNode.parentNode;

    if (!disabled) {
      labelEl.current.classList.remove('active');
      helperEl.current.classList.remove('active');
      textFieldNativeEl.classList.remove('active');
      outsideBorderEl.classList.remove('active');
    }
  };

  return (
    <div className={classes} style={style} {...props}>
      <LabelUi
        id={labelId}
        htmlFor={htmlFor}
        label={label}
        state={state}
        labelRef={labelEl}
        disabled={disabled}
        required={required}
      />
      <TextFieldUi
        id={htmlFor}
        labelId={labelId}
        name={name}
        placeholder={placeholder}
        label={label}
        state={state}
        disabled={disabled}
        handleOnFocus={handleOnFocus}
        handleOnBlur={handleOnBlur}
        value={value}
        required={required}
        inputRef={inputRef}
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

TextFieldLabelHelper.defaultProps = {
  className: '',
  label: '',
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
  inputRef: () => {},
};

TextFieldLabelHelper.propTypes = {
  className: string,
  label: string,
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
  inputRef: func,
};
