import React from 'react';
import PropTypes from 'prop-types';

function TapButton(props) {

  const handleClick = () => {
    props.tapBarrel(props.barrel);
  };

  return (
    <button onClick={handleClick}>Tap</button>
  );
}

TapButton.propTypes = {
  barrel: PropTypes.object.isRequired,
  tapBarrel: PropTypes.func.isRequired
};

export default TapButton;