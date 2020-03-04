/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, objectOf, bool, func } from 'prop-types';
import './TextFieldUi.scss';

export default function TextFieldUi({
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

  const classes = [
    'rex-text-field-ui',
    'rex-text-field-ui-border',
    className,
    stateClass,
  ]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const hasLabel = !!(label && label.length > 0);
  // const handleOnFocus = e => {
  //   const textFieldBorder = e.target.parentNode.parentNode;
  //   const textFieldLabel =
  //     e.target.parentNode.parentNode.parentNode.previousSibling;
  //   textFieldBorder && textFieldBorder.classList.add('focus');
  //   textFieldLabel && textFieldLabel.classList.add('focus');
  // };
  // const handleOnFocusOut = e => {
  //   const textFieldBorder = e.target.parentNode.parentNode;
  //   const textFieldLabel =
  //     e.target.parentNode.parentNode.parentNode.previousSibling;
  //   textFieldBorder && textFieldBorder.classList.remove('focus');
  //   textFieldLabel && textFieldLabel.classList.remove('focus');
  // };

  return (
    <div className={classes} style={style} disabled={disabled}>
      <input
        id={id}
        className="rex-text-field-native"
        name={name}
        placeholder={placeholder}
        aria-label={!hasLabel ? name || placeholder : null}
        aria-labelledby={hasLabel ? labelId : null}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}

TextFieldUi.defaultProps = {
  name: '',
  placeholder: '',
  className: '',
  htmlFor: '',
  state: '',
  label: '',
  labelId: '',
  id: '',
  style: {},
  disabled: false,
  handleOnFocus: () => {},
  handleOnBlur: () => {},
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
};
