import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/beers">Beers</Link></li>
                    <li><Link to="/random-beers">Select Random Beers</Link></li>
                    <li><Link to="/new-beers">Make a Beer</Link></li>
                </ul>
            </div>
        );
    }
}

export default Home;