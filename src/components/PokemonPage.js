import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
const API = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    name:"",
    hp:"",
    frontImage:"",
    backImage:""
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({
      pokemon: data
    }))
  }
  
  filterPokemon = (e) => {
    let filteredPokemon = this.state.pokemon.filter(p => p.name.includes(e.target.value))
    this.setState({pokemon: filteredPokemon})
  } 

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleHpChange = (e) =>{
    this.setState({
      hp: e.target.value
    })
  }

  handleFrontImageChange = (e) =>{
    this.setState({
      frontImage: e.target.value
    })
  }

  handleBackImageChange = (e) => {
    this.setState({
      backImage: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let formData = { name: this.state.name, hp: this.state.hp,sprites: {front:this.state.frontImage,back: this.state.backImage }}
    let newData = this.state.pokemon.concat(formData)
    this.setState({
      pokemon: newData
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleNameChange = {this.handleNameChange} handleHpChange = {this.handleHpChange} handleFrontImageChange = {this.handleFrontImageChange} handleBackImageChange = {this.handleBackImageChange} handleSubmit = {this.handleSubmit} />
        <br />
        <Search filterPokemon = {this.filterPokemon} />
        <br />
        <PokemonCollection pokemon = {this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
