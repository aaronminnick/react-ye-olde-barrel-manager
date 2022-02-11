import React from 'react';

function ReusableAddEditForm(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (props.mode) {
      case "Add":
        break;
      case "Edit":
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
    <form onSubmit={handleSubmit}>
      <label for="name">Name: </label>
      <input type="text" id="name" name="name" defaultValue={barrel.name} required />
      <label for="brand">Maker: </label>
      <input type="text" id="brand" name="brand" defaultValue={barrel.brand} required />
      <label for="price">Shillings: </label>
      <input type="number" id="price" name="price" min="1" step="1" defaultValue={barrel.price} required/>
      <label for="strength">Strength:</label>
      <select id="strength" name="strength" defaultValue={barrel.strength}>
        <option value="milde">Milde</option>
        <option value="strong">Strong</option>
      </select>
      <label for="notes">Notes:</label>
      <textarea id="notes" name="notes" defaultValue={barrel.notes} required></textarea>
      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default ReusableAddEditForm;