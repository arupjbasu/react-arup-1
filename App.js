import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  state = {
        characters: [
          {
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
      },
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
  render() {
    const { characters } = this.state;
   
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
      </div>
    )
  }
}

export default App