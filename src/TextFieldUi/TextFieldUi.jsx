/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string } from 'prop-types';
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
  ...props
}) {
  const stateClass = (() => {
    switch (state) {
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
  })();
  const classes = ['rex-text-field-native', className, stateClass]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const hasLabel = !!(label && label.length > 0);

  return (
    <div className="rex-text-field-ui">
      <div className="rex-text-field-inner">
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          className={classes}
          aria-label={!hasLabel ? name || placeholder : null}
          aria-labelledby={hasLabel ? labelId : null}
          {...props}
        />
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
};
