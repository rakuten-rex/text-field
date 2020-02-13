/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string } from 'prop-types';
import './TextFieldUi.scss';

export default function TextFieldUi({
  name,
  placeholder,
  className,
  htmlFor,
  ...props
}) {
  const classes = ['rex-text-field-native', className]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();

  return (
    <div className="rex-text-field-ui">
      <div className="rex-text-field-inner">
        <input
          id={htmlFor}
          name={name}
          placeholder={placeholder}
          className={classes}
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
};

TextFieldUi.propTypes = {
  name: string,
  placeholder: string,
  className: string,
  htmlFor: string,
};
