import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out <span className='hotel-text'>Roswell</span> rooms</h1>
        <div className='cards_container'>
            <div className='cards__wrapper'>
                 
 
                <ul className='cards__items'>
                    <CardItem
                           
                            src="images/single.jpg"
                            line="From ₱4000"
                            text="To ₱3000 per night"
                            label="Single Room"
                            
                    />
                    <CardItem
                            src="images/double.jpg"
                            line="From ₱5000"
                            text="To ₱4000 per night"
                            label="Double Room"
                            
                    />
                    <CardItem
                            src="images/quad.jpg"
                            line="From ₱6000"
                            text="To ₱5000 per night"
                            label="Quad Room"
                            
                    />

                    <CardItem
                            src="images/queen.jpg"
                            line="From ₱7000"
                            text="To ₱6000 per night"
                            label="Queen Room"
                            
                    />  
 
                </ul>




                <ul className='cards__items'>
                    <CardItem
                            src="images/king.jpg"
                            line="From ₱8000"
                            text="To ₱7000 per night"
                            label="King Room"
                            
                    />
                    <CardItem
                            src="images/studio.jpg"
                            line="From ₱10000"
                            text="To ₱9000 per night"
                            label="Studio Room"
                            
                    />
                    <CardItem
                            src="images/master.jpg"
                            line="From ₱7000"
                            text="To ₱5000 per night"
                            label="Master Suite Room"
                            
                    />

                    <CardItem
                            src="images/connecting.jpg"
                            line="From ₱9000"
                            text="To ₱8000 per night"
                            label="Connecting Rooms"
                            
                    />  

                </ul>


            </div>
        </div>


         

    </div>


           


    );
}

export default Cards;
