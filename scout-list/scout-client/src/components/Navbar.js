import React from 'react';
import '../css/Navbar.css';
import {NavLink} from 'react-router-dom'
import Today from '../containers/Today';

const Navbar = () => {
    return(
    <nav className='navbar'>
                <ul>
                    <button><NavLink to="/"> Home</NavLink></button>
                    <button><NavLink to="/players"> Player Inventory</NavLink> </button>
                    <button><NavLink to="/player/new">Add New Player</NavLink> </button>
                    <button><NavLink to="/notes">Note List</NavLink> </button>
                    <button><NavLink to="/note/new">Add New Note</NavLink> </button>
                    <button><NavLink to="/info">Information / Resources</NavLink> </button>
                    <button><NavLink to="/teams">NFL Teams</NavLink></button>
                </ul>
                <section className='today'>
                    <Today/>
                </section>
            </nav>
    )
}
 export default Navbar;
