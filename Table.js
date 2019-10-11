import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
  )
}

const TableBody2 = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const TableBody3 = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
  </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {

    const { characterData,removeCharacter } = this.props
    
    return (
      <table class="table table-bordered">
        <TableHeader />
        <TableBody />

        <TableHeader />
        <TableBody2 characterData={characterData}/>

        <TableHeader />
        <TableBody3 characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }
}
export default Table