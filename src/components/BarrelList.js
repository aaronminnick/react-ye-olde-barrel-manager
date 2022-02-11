import React from 'react';
import Barrel from './Barrel';
import ReusableAddEditForm from './ReusableAddEditForm';

import {v4} from 'uuid';

class BarrelList extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      view: "BarrelList",
      barrels : [
        {
          tapped: false,
          name: "ale",
          brand: "house",
          price: 2,
          pints: 124,
          alcoholContent: "strong",
          notes: "The house ale doth be very goode and tasteth only slightly of filthe."
        }
      ]
    }
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