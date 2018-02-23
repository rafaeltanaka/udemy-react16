import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person.js'

class App extends Component {
  state  = { //apenas para componentes class-based, não funciona com o componentes fucionais 
    persons: [
      { name:"Max", age: 28 },
      { name:"Manu", age: 29 },
      { name:"Stephanie", age: 26 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi! =)</h1>
        <p>Funciona!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
