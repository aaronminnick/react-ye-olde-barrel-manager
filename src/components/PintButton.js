import React from 'react';
import PropTypes from 'prop-types';

function PintButton(props) {

  const handleClick = () => {
    props.pullPint(props.barrel);
  }

  return (
    <button onClick={handleClick}>Pulle a pinte</button>
  );
}

PintButton.PropTypes = {
  barrel: PropTypes.object.isRequired,
  pullPint: PropTypes.func.isRequired
};

export default PintButton;