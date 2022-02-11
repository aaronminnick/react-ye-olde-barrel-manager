import React from 'react';
import PintButton from './PintButton';
import TapButton from './TapButton';
import DiscardButton from './DiscardButton';

function Barrel(props) {

  const BarrelStyle = {
    backgroundColor: "blanchedalmond",
    border: "2px solid brown",
    borderRadius: "50%"
  }

  let buttonToShow = null;
  (props.barrel.tapped) ?
    buttonToShow = <PintButton /> :
    buttonToShow = <TapButton />;

  return (
    <React.Fragment>
      <div style={BarrelStyle}>
        <h2>{props.barrel.brand} {props.barrel.name}</h2>
        <h3>{props.barrel.price} shillings</h3>
        <p><em>{props.barrel.alcoholContent}</em></p>
        <p>{props.barrel.notes}</p>
      </div>
      {buttonToShow}
      <DiscardButton />
    </React.Fragment>
  );
}

export default Barrel;