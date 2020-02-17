/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, objectOf } from 'prop-types';
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
      case 'focus':
        return 'focus';
      case 'hover':
        return 'hover';
      case 'disabled':
        return 'disabled';
      default:
        return '';
    }
  })(state);

  const classes = ['rex-text-field-ui', className, stateClass]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const hasLabel = !!(label && label.length > 0);
  const borderClass = ['rex-text-field-ui-border', stateClass]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const handleOnFocus = e => {
    const textFieldBorder = e.target.parentNode.parentNode;
    const textFieldLabel =
      e.target.parentNode.parentNode.parentNode.previousSibling;
    textFieldBorder && textFieldBorder.classList.add('focus');
    textFieldLabel && textFieldLabel.classList.add('focus');
  };
  const handleOnFocusOut = e => {
    const textFieldBorder = e.target.parentNode.parentNode;
    const textFieldLabel =
      e.target.parentNode.parentNode.parentNode.previousSibling;
    textFieldBorder && textFieldBorder.classList.remove('focus');
    textFieldLabel && textFieldLabel.classList.remove('focus');
  };

  return (
    <div className={classes} style={style}>
      <div className={borderClass}>
        <div className="rex-text-field-inner">
          <input
            id={id}
            className="rex-text-field-native"
            name={name}
            placeholder={placeholder}
            aria-label={!hasLabel ? name || placeholder : null}
            aria-labelledby={hasLabel ? labelId : null}
            onFocus={handleOnFocus}
            onBlur={handleOnFocusOut}
            {...props}
          />
        </div>
      </div>
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
};
