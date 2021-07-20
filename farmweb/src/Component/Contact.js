import React from 'react'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import Footer from './Footer'
const Result=()=>{
    return(
        <p>Your message has been sucessfully sent.I Will contact you soon</p>
    )
}

export default function Contact(props) {
    <Footer/>
    const [result,showResult]=useState(false);
    const sendEmail=(e) =>{
        e.preventDefault();
    
        emailjs.sendForm('Chantal', 'template_hryt9g9', e.target, 'user_NpdJvKE7nvEZwi4JaWWqn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true)
      };
      setTimeout(() => {
          showResult(false)
      }, 5000);
    

    return (
       <div className="App">
      <form action=""onSubmit={sendEmail}>
          <div className="formWord">
              <h2>Contact Me</h2>
              <span className="text1">Full name</span>
              <br/>
              <input className="input100"type="text"placeholder="fullname"required></input>
<br/>
<span className="text1">Phone number</span>
              <br/>
              <input className="input100"type="number"placeholder="phone number"required></input>
<br/>             <span className="text1">Your Email</span>
              <br/>
              <input className="input100"type="text"placeholder="Email"required></input>
<br/>
 </div>
 <div className="formword">
     <span className="text1">Message</span>
     <br/>
     <textarea name="message"className="input100"required></textarea>
 <br/>
 <button className="btn2">SUBMIT</button>
 <div className="row">{result?<Result/>:null}</div>
 </div>
      </form>
      <Footer/>
    </div>
    )
}

