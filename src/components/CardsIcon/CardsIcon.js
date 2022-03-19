import React from 'react'
import CardIconItems from './CardIconItems'
import './CardsIcon.css'

function CardsIcon() {
  return (
    <>
        <h1>Why would you choose <span className='hotel-text'>Roswell</span> Hotel?</h1>
        <div className="row">
          <CardIconItems icon='fas fa-luggage-cart fa-4x hotel-text' title='Safe'/>
          <CardIconItems icon='fas fa-utensils fa-4x hotel-text' title='Food'/>
          <CardIconItems icon='fas fa-swimmer fa-4x hotel-text' title='Relax'/>
          <CardIconItems icon='fas fa-bed fa-4x hotel-text' title='Comfortable'/>
        </div>
    
    </>
  )
}

export default CardsIcon