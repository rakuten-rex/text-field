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
        id={id}
        className={innerClasses}
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
