// import './App.css';
import Header from '../Component/Header';
import Main from '../Component/Main';
import Basket from '../Component/Basket';
import data from '../Component/data';
import { useState } from 'react';
import React from 'react'
 import '../index.css';
import Footer from './Footer';

function App() {
    const { products } = data
    const [cartItems, setCartItems] = useState([])
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1 } : x)
            );
        } else {
            setCartItems([...cartItems, {...product, qty: 1 }]);

        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1 } : x)
            );
        }
    }
    return ( 
    <div className="App">
        <Header counterCartItems={ cartItems.length}>

        </Header>
         <div className = "row">
        <Main onAdd ={onAdd}
        products = { products }>
           </Main> 
           <Basket onAdd ={ onAdd }
               onRemove ={ onRemove }
              cartItems ={cartItems}></Basket> 
         </div> 
         <Footer/>
          </div>
    )

}
export default App;