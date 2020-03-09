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
      default:
        return '';
    }
  })(state);
  const classes = ['rex-text-field-helper', className, stateClass]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const helperEl = useRef(null);
  const handleOnFocus = e => {
    const textFieldNativeEl = e.target;
    const outsideBorderEl = e.target.parentNode;

    if (!disabled) {
      helperEl.current.classList.add('active');
      textFieldNativeEl.classList.add('active');
      outsideBorderEl.classList.add('active');
    }
  };
  const handleOnBlur = e => {
    const textFieldNativeEl = e.target;
    const outsideBorderEl = e.target.parentNode;

    if (!disabled) {
      helperEl.current.classList.remove('active');
      textFieldNativeEl.classList.remove('active');
      outsideBorderEl.classList.remove('active');
    }
  };

  return (
    <div className={classes} style={style} disabled={disabled} {...props}>
      <TextFieldUi
        id={htmlFor}
        labelId={labelId}
        name={name}
        placeholder={placeholder}
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

TextFieldHelper.defaultProps = {
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

TextFieldHelper.propTypes = {
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
