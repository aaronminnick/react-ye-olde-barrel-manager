import React from 'react';
import PropTypes from 'prop-types';

function DiscardButton(props) {

  const handleClick = () => {
    props.discardFunc(props.barrel);
  };

  return (
    <button onClick={handleClick}>Discarde this barrel</button>
  );
}

DiscardButton.propTypes = {
  barrel: PropTypes.object.isRequired,
  discardFunc: PropTypes.func.isRequired
};

export default DiscardButton;