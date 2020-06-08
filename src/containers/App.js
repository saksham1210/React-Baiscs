import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'



class App extends Component {

  state = {
    persons: [
      {id : '1', name : "Max", age:28},
      {id : '2', name: "Manu", age: 29},
      {id : '3', name:"Stephanie",age:26}
    ],
    otherStates:"someother value",
    showPersons: false
  }
  nameChangeHandler=(event,id) =>{
    const personIndex =this.state.persons.findIndex(p => {
      return p.id===id;
    });
    const person={...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons =[...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons: persons });
  }
  deletePersonHandler =(personIndex) =>{
    const person =[...this.state.persons];
    person.splice(personIndex,1);
    this.setState({persons:person});
  }

  togglePersonHandler= () => {
    const doesShow =this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  render() {
   
    let persons=null;
    if (this.state.showPersons){
      persons=(
          <Persons
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            persons={this.state.persons}
          /> 
      );
    } 

    return (
        <div className={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
          />
          {persons}
        </div>      
    );
  }
}

export default App;
