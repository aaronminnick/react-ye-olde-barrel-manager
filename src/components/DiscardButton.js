import React from 'react';

function DiscardButton(props) {

  const handleClick = () => {
    props.discardFunc(props.barrel);
  };

  return (
    <button onClick={handleClick}>Discarde this barrel</button>
  );
}

export default DiscardButton;