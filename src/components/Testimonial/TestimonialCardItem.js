import React from 'react'
import './TestimonialCardItem.css'



function TestimonialCardItem(props) {
  return (
    <>

<div className="card-client">
  <img src={props.image} alt=""/>
  <h1 className='name'>{props.name}</h1>
  <p className="title">{props.title}</p>
  <p>{props.rate}</p>
  <div className='social-m'>
    <a href="https://youtube.com"><i className="fab fa-youtube"></i></a> 
    <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>  
    <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>  
    <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a> 
  </div>
  <p><button>Contact</button></p>
</div>
    
    </>
  )
}

export default TestimonialCardItem