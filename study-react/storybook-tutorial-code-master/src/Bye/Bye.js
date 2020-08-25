import React from 'react';
import PropTypes from 'prop-types';

const Bye = ({ name }) => {
  return <p>MDX로만 스토리 작성하기, {name}</p>;
};

Bye.propTypes = {
  name: PropTypes.string
};

export default Bye;