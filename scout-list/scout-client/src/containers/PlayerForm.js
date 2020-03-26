import React, { Component } from 'react'
import{connect} from 'react-redux';
import {newPlayer} from '../actions/playerActions';


 class PlayerForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: "",
            description: "",
            height: "",
            weight: "",
            imgUrl: "",
            fourty: "",
            school: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        console.log('A');
        this.props.newPlayer(this.state);
        console.log('B');
        event.preventDefault();
        this.setState({
            name: "",
            description: "",
            height: "",
            weight: "",
            imgUrl: "",
            fourty: "",
            school: ""
        })
    }

    render() {
        return (
            <div className= 'container'>
                <h2>Add Player to Inventory</h2>

                <form onSubmit={this.handleSubmit} >
                   <div className="boxform">
                       <label>Name:</label>
                       <input type="text" onChange={this.handleChange} name ="name" value={this.state.name}/>
                        <br/>

                       <label>Height:</label>
                       <input type="text" onChange={this.handleChange} name ="height" value={this.state.height}/>
                       <br/>
                       <label>Weight:</label>
                       <input type="text" onChange={this.handleChange} name ="weight" value={this.state.weight}/>
                       <br/>
                       <label>Image: </label>
                       <input type="text" onChange={this.handleChange} name="imgUrl" value={this.state.imgUrl}/>
                       <br/>
                       <label>School: </label>
                       <input type="text" onChange={this.handleChange} name="school" value={this.state.school}/>
                       <br/>
                       <label>Fourty: </label>
                       <input type="text" onChange={this.handleChange} name="fourty" value={this.state.fourty}/>
                       <br/>
                       <label>Description:</label>
                       <input type="text" onChange={this.handleChange} name ="description" value={this.state.description}/>
                       <br/>

                       <button className="addbox" type="submit" value="submit">Submit</button>
                   </div>
                </form>
            </div>
        )
    }
}
export default connect(null, {newPlayer}) (PlayerForm);
