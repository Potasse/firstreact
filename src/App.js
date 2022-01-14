import React, { Component } from 'react'
import './App.css'

import Membre from './components/Membre'
import Button from './components/Button'

const famille = {

  membre1: {
    nom: 'Theo',
    age: 30,
    poids: 10,
    mesure: 'KG' 
    
  },

  membre2: {
    nom: 'Matias',
    age: 23,
    poids: 10,
    mesure: 'KG'
   
  },

  membre3: {
    nom: 'Antho',
    age: 27,
    poids: 10 ,
    mesure: 'KG'
    
  },

  membre4: {
    nom: 'Milou',
    age: 3,
    poids: 5,
    mesure: 'KG'
   
  }

}


class App extends Component {

  state = {

    famille
  }

  handelClick = (num) => {

     const famille = { ... this.state.famille }
     famille.membre1.age += num
    this.setState({ famille })
  }


  handleChange = event => {

     const famille = { ... this.state.famille }
     const nom = event.target.value
     famille.membre1.nom = nom 
    this.setState({ famille })
  }

render() {
  const { titre } = this.props
  const { famille } = this.state

  return (

   // <Fragment></Fragment>
    
    <div className='App'>
      
        <h1> { titre } </h1>
        <input value={famille.membre1.nom} 

        onChange={this.handleChange} 
        type='text' 

        />

        <Membre 

        nom= { famille.membre1.nom }
        age = {famille.membre1.age} 
        poids = {famille.membre1.poids}
        mesure = {famille.membre1.mesure}
        />

        <Membre 

        nom= { famille.membre2.nom }
        age = {famille.membre2.age} 
        poids = {famille.membre2.poids} 
        mesure = {famille.membre1.mesure}
        />

        <Membre 

        nom= { famille.membre3.nom }
        age = {famille.membre3.age} 
        poids = {famille.membre3.poids} 
        mesure = {famille.membre1.mesure}
       />

        <Membre 

        nom= { famille.membre4.nom }
        age = {famille.membre4.age} 
        poids = {famille.membre4.poids}
        mesure = {famille.membre1.mesure}
         >

          <strong>
            Je suis un chien.
          </strong>

        </Membre>

        <Button 
        ajouter={() => this.handelClick (2)} />

    </div>

    )
  }
}


export default App;
