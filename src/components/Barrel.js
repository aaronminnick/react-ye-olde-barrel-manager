import React from 'react';
import PintButton from './PintButton';
import TapButton from './TapButton';
import DiscardButton from './DiscardButton';

function Barrel(props) {

  const BarrelStyle = {
    backgroundColor="blanchedalmond",
    border="2px solid brown",
    borderRadius="50%"
  }

  const {barrel} = props.barrel;

  let buttonToShow = null;
  (barrel.tapped) ?
    buttonToShow = <PintButton /> :
    buttonToShow = <TapButton />;

  return (
    <React.Fragment>
      <div style={BarrelStyle}>
        <h2>{barrel.brand} {barrel.name}</h2>
        <h3>{barrel.price} shillings</h3>
        <p><em>{barrel.alcoholContent}</em></p>
        <p>{barrel.notes}</p>
      </div>
      {buttonToShow}
      <DiscardButton />
    </React.Fragment>
  );
}

export default Barrel;