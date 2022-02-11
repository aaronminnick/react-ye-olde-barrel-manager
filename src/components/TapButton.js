import React from 'react';

function TapButton(props) {

  const handleClick = () => {
    props.tapBarrel(props.barrel);
  }

  return (
    <button onClick={handleClick}>Tap</button>
  );
}

export default TapButton;