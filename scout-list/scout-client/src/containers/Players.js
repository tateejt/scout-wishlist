import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions/playerActions';
import { removePlayer } from '../actions/playerActions';
import '../css/players.css'

class Players extends Component {
    componentDidMount() {
        this.props.fetchPlayers();
    }

    handleDelete = (playerid) => {
        this.props.removePlayer(playerid);
    }

    render() {
        const ncaaPlayers = this.props.players.map(player =>
            (<div key={player.id} className="container">
                <div className="row">
                    <div className = "col md-4 mt-4">
                          <img src={player.imgUrl} alt={player.name} />

                    </div>
                    <div className= "col md-6 mt-4">
                          <h3>{player.name}</h3>
                    <p>{player.description} {player.height} - {player.weight}</p>
                    <p>Attributes: {player.fourty}</p>  <p>School: {player.school}</p>
                     <button onClick={() => {this.handleDelete(player.id)} }>Delete</button>
                    </div>
                </div>
            </div>
            ))

        return (
            <div className="playeritems">
                <h1>Inventory</h1>
                {ncaaPlayers}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    players: state.players.athletes
})

export default connect(mapStateToProps, { fetchPlayers, removePlayer })(Players);
