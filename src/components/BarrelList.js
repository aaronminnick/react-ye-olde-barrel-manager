import React from 'react';
import Barrel from './Barrel';
import ReusableAddEditForm from './ReusableAddEditForm';
import {v4} from 'uuid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class BarrelList extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      view: "List",
      barrelToEdit: null,
      barrels : [
        {
          id: v4(),
          tapped: false,
          name: "Ale",
          brand: "House",
          price: 5,
          pints: 124,
          strength: "strong",
          notes: "The house ale doth be very goode and tasteth only slightly of filthe."
        },
        {
          id: v4(),
          tapped: false,
          name: "Small Ale",
          brand: "House",
          price: 2,
          pints: 124,
          strength: "milde",
          notes: "Small ale doth be goode for persons of weake constitution such as children or the eldery."
        }
      ]
    }
  }
  
  updateView = (viewName) => {
    this.setState({view: viewName});
  };

  updateBarrelToEdit = (barrel) => {
    this.setState({barrelToEdit: barrel});
  }

  updateBarrelInState = (barrel) => {
    const newBarrels = this.state.barrels.filter(b => b.id !== barrel.id).concat(barrel);
    //need to implement sort to keep barrels in same visual order
    this.setState({barrels: newBarrels});
  };

  tapBarrel = (barrel) => {
    barrel.tapped = true;
    this.updateBarrelInState(barrel);
  };

  pullPint = (barrel) => {
    barrel.pints -= 1;
    this.updateBarrelInState(barrel);
  };

  addBarrel = (partialBarrelObj) => {
    const newBarrel = {...partialBarrelObj, id: v4(), tapped: false, pints: 124}
    this.updateBarrelInState(newBarrel);
  };

  discardBarrel = (barrel) => {
    const newBarrels = this.state.barrels.filter(b => b.id !== barrel.id);
    this.setState({barrels: newBarrels});
  };

  render() {
    let currentView = null;
    switch (this.state.view) {
      case "List":
        currentView = 
          this.state.barrels.map(b => {
            let buttonFunc = null;
            (b.tapped) ?
              buttonFunc = this.pullPint :
              buttonFunc = this.tapBarrel; 
            return <Barrel barrel={b}
              buttonFunc = {buttonFunc}
              updateEditBarrelFunc = {this.updateBarrelToEdit}
              viewFunc = {this.updateView}
              discardFunc = {this.discardBarrel} 
              key={v4()} />
          }
          ).concat(
            <div className="barrel" onClick={() => this.updateView("Add")}>
              <div className="barrel-contents">
                <h2>Add a new barrel to stocke</h2>
              </div>
            </div>
          );
        break;
      case "Add":
        currentView = <ReusableAddEditForm mode="Add"
          submitFunc={this.addBarrel}
          viewFunc = {this.updateView} />
        break;
      case "Edit":
        currentView = <ReusableAddEditForm mode="Edit"
          barrel={this.state.barrelToEdit}
          submitFunc={this.updateBarrelInState}
          viewFunc = {this.updateView} />
        break;
    }

    return (
      <React.Fragment>
        <Container className="header">
          <h1>Ye Olde Barrel Management</h1>
        </Container>
        <Container>
          <Row>
            {currentView}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default BarrelList;