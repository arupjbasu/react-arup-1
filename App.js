import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  
  render() {
    const characters = [
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
    return (
      <div className="container">
        <Table characterData={characters}/>
      </div>
    )
  }
}

export default App