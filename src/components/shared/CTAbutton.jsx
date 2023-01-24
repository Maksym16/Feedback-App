import React from 'react';
import PropTypes from 'prop-types';

export default function CTAbutton({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

CTAbutton.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false
}

CTAbutton.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool
}
