import React from 'react';
import PropTypes from 'prop-types';

function ReusableAddEditForm(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (props.mode) {
      case "Add":
        barrel = {
          name: event.target.name.value,
          brand: event.target.brand.value,
          price: event.target.price.value,
          strength: event.target.strength.value,
          notes: event.target.notes.value
        }
        props.submitFunc(barrel)
        props.viewFunc("List");
        break;
      case "Edit":
        barrel = {
          ...barrel,
          name: event.target.name.value,
          brand: event.target.brand.value,
          price: event.target.price.value,
          strength: event.target.strength.value,
          notes: event.target.notes.value
        }
        props.submitFunc(barrel)
        props.viewFunc("List");
        break;
    }
  }

  let barrel = null;
  (props.mode === "Edit") ?
    barrel = {...props.barrel} :
    barrel = {
      tapped: false,
      name: "",
      brand: "",
      price: 1,
      pints: 124,
      strength: "milde",
      notes: ""
    };

  let buttonText = "";
  (props.mode === "Edit") ?
    buttonText = "Update stocke" :
    buttonText = "Add to stocke"

  return (
    <div className="add-edit-form">
      <form onSubmit={handleSubmit}>
        <label for="name">Name : </label>
        <input type="text" id="name" name="name" defaultValue={barrel.name} required />
        <label for="brand">Maker : </label>
        <input type="text" id="brand" name="brand" defaultValue={barrel.brand} required />
        <hr/>
        <label for="price">Coste in Shillings : </label>
        <input type="number" id="price" name="price" min="1" step="1" defaultValue={barrel.price} required/>
        <hr/>
        <label for="strength">Strength :</label>
        <select id="strength" name="strength" defaultValue={barrel.strength}>
          <option value="milde">Milde</option>
          <option value="strong">Strong</option>
        </select>
        <hr/>
        <label for="notes">Notes :</label>
        <textarea id="notes" name="notes" defaultValue={barrel.notes} required></textarea>
        <hr/>
        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
}

ReusableAddEditForm.PropTypes = {
  mode: PropTypes.string.isRequired,
  barrel: PropTypes.object,
  submitFunc: PropTypes.func.isRequired,
  viewFunc: PropTypes.func.isRequired
};

export default ReusableAddEditForm;