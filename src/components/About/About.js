import React from 'react'
import './About.css'
import Caro from '../Carousel/Carousel'



function About() {
 

  return (
    <>

<div className="about-page">
        <div className="about-page1">
          <h1>About <span className='hotel-text'>Roswell</span></h1>
          <p>

          Roswell Hotel is a traditional with a modern twist hotel built in the 1955 offering traditional facilities. It is sited on the seafront at a convenient location, which is close to its competition hotels and the main shopping center. Accessibility of the hotel is high. It is less than 30 minutes from the nearest airport and supported by good road, rail and bus linking to major cities.The Hotel is a 250 rooms establishment in which 200 are double rooms and 50 are king bedded rooms, all includes private bathroom. The rooms are of a good size, comfortable and with different decorative styles.
          
          </p>
        </div>


        <div className="about-page2">
            <Caro/>
        </div>


</div>

    </>
  )
}

export default About