import React, { Component } from 'react'





class App extends Component {

  state = {
    listOfPeople: []
  }



  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => this.setState({
        listOfPeople: data.people
      }))
  }


  render() {
    console.log(this.state.listOfPeople)
    return (
      <div>
        {this.state.listOfPeople.map(person => person.name)}
      </div>
    )
  }

}

export default App