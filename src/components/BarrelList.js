import React from 'react';
import Barrel from './Barrel';
import ReusableAddEditForm from './ReusableAddEditForm';
import {v4} from 'uuid';

class BarrelList extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      view: "Add",
      barrels : [
        {
          id: v4(),
          tapped: false,
          name: "ale",
          brand: "house",
          price: 2,
          pints: 124,
          strength: "strong",
          notes: "The house ale doth be very goode and tasteth only slightly of filthe."
        }
      ]
    }
  }

  addBarrel(partialBarrelObj) {
    const newBarrel = {...partialBarrelObj, id: v4(), tapped: false, pints: 124}
    this.updateBarrelInState(newBarrel);
  }

  tapBarrel(barrel) {
    barrel.tapped = true;
    this.updateBarrelInState(barrel);
  }

  pullPint(barrel) {
    barrel.pints -= 1;
    this.updateBarrelInState(barrel);
  }

  updateBarrelInState(barrel) {
    const newBarrels = this.state.barrels.filter(b => b.id !== barrel.id).concat(barrel);
    //need to implement sort to keep barrels in same visual order
    this.setState({barrels: newBarrels});
  }
  
  render() {
    let currentView = null;
    switch (this.state.view) {
      case "BarrelList":
        currentView = 
          this.state.barrels.map(b =>
            <Barrel barrel={b} 
              key={v4()} />
          );
        break;
      case "Add":
        currentView = <ReusableAddEditForm mode="Add" />
        break;
      case "Edit":
        currentView = <ReusableAddEditForm mode="Edit" />
        break;
    }

    return (
      <React.Fragment>
        {currentView}
      </React.Fragment>
    );
  }
}

export default BarrelList;