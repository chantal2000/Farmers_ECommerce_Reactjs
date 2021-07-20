
import './App.css';
import All from './Component/All'
import React  from 'react'
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Sell from './Component/Sell';
// import Buy from './Component/Buy';
import {Link,Route, BrowserRouter as Router} from 'react-router-dom'
// import { Buy } from './Component/Buy';
import { Footer } from './Component/Footer';
function App(){
 
 return(
   <div className="App">
          <Router>
     <nav>
           <span ><Link to="/Home"className="white">Home</Link> </span>
           <span><Link to="/about"className="white">About</Link></span>     
           <span><Link to="/contact"className="white">Contact us</Link></span>
      <span><Link to="/All"className="white">Buy Products</Link></span>
       <span><Link to="/Sell"className="white">Sell Products</Link></span>
     </nav>

     <Route path="/Home" exact component={Home} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     <Route path="/All"component={All}/>
     <Route path="/Sell"component={Sell}/>
     {/* <Route path="/Footer"component={Footer}/> */}
</Router>
      </div> 
 
 )

}
export default App;

