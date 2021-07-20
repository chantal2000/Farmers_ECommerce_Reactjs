import React from 'react'

export default function Header(props) {
    const {counterCartItems}=props;
    return (
 <header className="row block center">
     <div>
         <a href="#/">
             <h1>Buy Products</h1>
         </a>
     </div>
     <div>
         <a href="#/cart">Cart{' '}
         {counterCartItems?(
<button className="badge">{counterCartItems}</button>
):(
    ' '
)}

         </a><a href="#/signin">Sign in</a>
     </div>
 </header>
    )
}