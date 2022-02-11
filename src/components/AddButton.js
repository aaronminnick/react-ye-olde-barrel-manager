import React from 'react';
import PropTypes from 'prop-types';

function AddButton(props) {

  const handleClick = () => {
    props.viewFunc("Add");
  };

  return (
    <div className="barrel" onClick={handleClick}>
      <div className="barrel-contents">
        <h2>Add a new barrel to stocke</h2>
      </div>
    </div>
  );
}

AddButton.propTypes = {
  viewFunc: PropTypes.func.isRequired
};

export default AddButton;