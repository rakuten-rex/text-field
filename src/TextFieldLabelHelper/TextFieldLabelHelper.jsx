/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { string, objectOf, bool } from 'prop-types';
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
  ...props
}) {
  const classes = ['rex-text-field-label-helper', className]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const labelEl = useRef(null);
  const helperEl = useRef(null);
  const handleOnFocus = e => {
    const textFieldNativeEl = e.target;
    const outsideBorderEl = e.target.parentNode;

    if (!disabled) {
      labelEl.current.classList.add('active');
      helperEl.current.classList.add('active');
      textFieldNativeEl.classList.add('active');
      outsideBorderEl.classList.add('active');
    }
  };
  const handleOnBlur = e => {
    const textFieldNativeEl = e.target;
    const outsideBorderEl = e.target.parentNode;

    if (!disabled) {
      labelEl.current.classList.remove('active');
      helperEl.current.classList.remove('active');
      textFieldNativeEl.classList.remove('active');
      outsideBorderEl.classList.remove('active');
    }
  };

  return (
    <div className={classes} style={style} disabled={disabled} {...props}>
      <LabelUi
        id={labelId}
        htmlFor={htmlFor}
        label={label}
        state={state}
        labelRef={labelEl}
        disabled={disabled}
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
};
