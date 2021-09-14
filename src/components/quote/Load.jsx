import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
  <button onClick={onClick} aria-label="How about a quote? Doh!">
    Load quote
  </button>
);

Load.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Load;
