import React from 'react'
import {Button} from '../Button/Button'

const Styleline = {
    textDecoration: 'line-through',
    
}

function CardItem(props) {
  return (
    <>
   
    <li className="cards__item">
        <div
        className='cards__item__link'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
             
                <img src={props.src} alt=""
                className='cards__item__img'/>
             
            </figure>
            <div className='cards__item_info'>
                <h5 className='cards__item__text'>
                    <span style={Styleline} >{props.line}</span> <br/>
                    {props.text}
                </h5>
                <Button  buttonStyle='btn--outline' buttonSize='btn--medium'>
                 BOOK NOW! <i className='fas fa-concierge-bell hotel-text'/>
            </Button>
            </div>
        </div>
         
    </li>
    
    </>
  )
}

export default CardItem;
