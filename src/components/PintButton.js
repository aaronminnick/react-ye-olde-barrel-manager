import React from 'react';

function PintButton(props) {

  const handleClick = () => {
    props.pullPint(props.barrel);
  }

  return (
    <button onClick={handleClick}>Pulle a pinte</button>
  );
}

export default PintButton;