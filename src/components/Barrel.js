import React from 'react';
import PintButton from './PintButton';
import TapButton from './TapButton';
import DiscardButton from './DiscardButton';

function Barrel(props) {

  const handleEditClick = () => {
    props.updateEditBarrelFunc(props.barrel);
    props.viewFunc("Edit");
  };

  let buttonToShow = null;
  (props.barrel.tapped) ?
    buttonToShow = <PintButton barrel={props.barrel}
      pullPint={props.buttonFunc} /> :
    buttonToShow = <TapButton barrel={props.barrel}
      tapBarrel={props.buttonFunc} />;

  return (
    <React.Fragment>
      <div className="barrel">
        <div className="barrel-contents">
          <h2>{props.barrel.brand} {props.barrel.name}</h2>
          <h3>{props.barrel.price} shillings</h3>
          <p><em>{props.barrel.strength}</em></p>
          <p>{props.barrel.notes}</p>
          <h4>Pintes remaining: {props.barrel.pints}</h4>
          {buttonToShow}
          <button onClick={handleEditClick}>Edit this barrel</button>
          <DiscardButton barrel={props.barrel}
            discardFunc={props.discardFunc} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Barrel;