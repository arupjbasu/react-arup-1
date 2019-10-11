import React, { Component } from 'react'
import Table from './Table'
import Form from './Form';
class App extends Component {
  state = {
        characters: [
         /* {
        name: 'Charlie2',
        job: 'Janitor2',
      },
      {
        name: 'Mac2',
        job: 'Bouncer2',
      },
      {
        name: 'Dee2',
        job: 'Aspring actress2',
      },
      {
        name: 'Dennis2',
        job: 'Bartender2',
      },*/
        ]
    };
  removeCharacter = index => {
  const { characters } = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}
handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }
  render() {
    const { characters } = this.state;
   
    return (
      /*<div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form />
      </div> */
       <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
    )
  }
}

export default App