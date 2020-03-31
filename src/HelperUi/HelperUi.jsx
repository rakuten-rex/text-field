/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, bool, objectOf } from 'prop-types';
import './HelperUi.scss';
import CheckIconPath from '../assets/check.svg';
import WarningIconPath from '../assets/warning.svg';

export default function HelperUi({
  helper,
  disabled,
  className,
  state,
  helperRef,
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
  const classes = ['rex-text-field-helper-ui', className, stateClass]
    .filter(singleClass => singleClass && singleClass.length > 0)
    .join(' ')
    .trim();
  const withIcon = state === 'error' || state === 'valid';
  const renderIcon = () => {
    if (state === 'error') {
      return <WarningIconPath className="rex-icon" />;
    }
    return <CheckIconPath className="rex-icon" />;
  };

  return (
    <small className={classes} disabled={disabled} ref={helperRef} {...props}>
      {withIcon && renderIcon()}
      {helper}
    </small>
  );
}

HelperUi.defaultProps = {
  helper: '',
  disabled: false,
  className: '',
  state: null,
  helperRef: null,
};

HelperUi.propTypes = {
  helper: string,
  disabled: bool,
  className: string,
  state: string,
  helperRef: objectOf(string),
};
