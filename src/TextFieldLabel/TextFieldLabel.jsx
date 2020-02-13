/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { string } from 'prop-types';
import LabelUi from '../LabelUi';
import TextFieldUi from '../TextFieldUi';

export default function TextFieldLabel({
  name,
  placeholder,
  className,
  label,
  htmlFor,
  id,
  labelId,
  state,
  ...props
}) {
  const classes = ['rex-text-field', className]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const labelEl = useRef(null);
  const onTextFieldMouseOver = () => {
    labelEl && labelEl.current.classList.add('hover');
  };
  const onTextFieldMouseOut = () => {
    labelEl && labelEl.current.classList.remove('hover');
  };

  return (
    <div className={classes} {...props}>
      <LabelUi
        id={labelId}
        htmlFor={htmlFor}
        label={label}
        state={state}
        labelRef={labelEl}
      />
      <TextFieldUi
        id={id}
        labelId={labelId}
        name={name}
        placeholder={placeholder}
        label={label}
        state={state}
        onMouseOver={onTextFieldMouseOver}
        onMouseOut={onTextFieldMouseOut}
        onFocus={onTextFieldMouseOver}
        onBlur={onTextFieldMouseOut}
      />
    </div>
  );
}

TextFieldLabel.defaultProps = {
  className: '',
  label: '',
  htmlFor: '',
  name: '',
  placeholder: '',
  state: '',
  id: '',
  labelId: '',
};

TextFieldLabel.propTypes = {
  className: string,
  label: string,
  htmlFor: string,
  name: string,
  placeholder: string,
  state: string,
  id: string,
  labelId: string,
};
