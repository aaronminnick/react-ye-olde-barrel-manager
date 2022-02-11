import React from 'react';
import PintButton from './PintButton';
import TapButton from './TapButton';
import DiscardButton from './DiscardButton';
import PropTypes from 'prop-types';

function Barrel(props) {

  const handleEditClick = () => {
    props.updateEditBarrelFunc(props.barrel);
    props.viewFunc("Edit");
  };

  let buttonToShow = null;
  let pintsText = "";
  if (props.barrel.tapped) {
    buttonToShow = <PintButton barrel={props.barrel}
      pullPint={props.buttonFunc} />
    pintsText = `Pintes remaining: ${props.barrel.pints}`;
  } else {
    buttonToShow = <TapButton barrel={props.barrel}
      tapBarrel={props.buttonFunc} />;
    pintsText = "Untapped";
  }

  return (
    <React.Fragment>
      <div className="barrel">
        <div className="barrel-contents">
          <h3>{props.barrel.brand} {props.barrel.name}</h3>
          <p><em>({props.barrel.strength})</em></p>
          <h4>Coste: {props.barrel.price} shillings</h4>
          <p><em>{props.barrel.notes}</em></p>
          <h4>{pintsText}</h4>
          {buttonToShow}
          <button onClick={handleEditClick}>Edit this barrel</button>
          <DiscardButton barrel={props.barrel}
            discardFunc={props.discardFunc} />
        </div>
      </div>
    </React.Fragment>
  );
}

Barrel.propTypes = {
  barrel: PropTypes.object.isRequired,
  buttonFunc: PropTypes.func.isRequired,
  updateEditBarrelFunc: PropTypes.func.isRequired,
  viewFunc: PropTypes.func.isRequired,
  discardFunc: PropTypes.func.isRequired
};

export default Barrel;