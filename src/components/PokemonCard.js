import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    isFront : true
  }

  handleClick = () => {
    let toggleState = !this.state.isFront
    this.setState(
      {
        isFront: toggleState
      }
    )
  }

  render() {
    return (
      <Card onClick = {this.handleClick}>
        <div>
          <div className="image">

            {this.state.isFront? <img src = {this.props.pokemon.sprites["front"]} alt="oh no!" /> : <img src = {this.props.pokemon.sprites["back"]} alt="oh no!"/> }

          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
             {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
