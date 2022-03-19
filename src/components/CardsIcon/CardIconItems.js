import React from 'react'
import './CardsIcon.css'

function CardIconItems(props) {
  return (
    <>
        <div className="column">
                <div className="card">
                  <i className={props.icon}></i>
                    <h3>{props.title}</h3>
                   
                </div>
        </div> 
    </>
  )
}

export default CardIconItems