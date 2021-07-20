import React, { Component } from 'react'
import { Link,Route,BrowserRouter as Router } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return ( 
        <div className="footer">
            <Router>
            <nav className="bottom">
            <h1>Connect with us
            </h1>
            <a href="https://twitter.com/NiyonkuruMarie4"className="white">Twii</a>
            <span ><Link to="/https://twitter.com/NiyonkuruMarie4"className="white"><i class="fab fa-twitter"></i></Link> </span>
            <span><Link to="/"className="white"></Link></span>     
            <span><Link to="/"className="white"></Link></span>
            <Route path=""></Route>
                <Route path=""></Route>
                <Route path=""></Route>
                {/* <Twitter></Twitter> */}

      </nav>
            </Router>
            </div>
        )
    }
}


export default Footer