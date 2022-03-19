import React from 'react'
import { Carousel } from 'react-carousel-minimal';

function Caro() {


    const data = [
        {
          image: "images/h1.jpg",
          caption: "Roswell Hotel"
        },
        {
          image: "images/master.jpg",
           caption: "Roswell Hotel"
        },
        {
          image: "images/h3.jpg",
           caption: "Roswell Hotel"
        },
        {
          image: "images/king.jpg",
          caption: "Roswell Hotel"
        },
        {
          image: "images/h5.jpg",
           caption: "Roswell Hotel"
        },
        {
          image: "images/h6.jpg",
           caption: "Roswell Hotel"
        }
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }


  return (
    <>

        
      <div style={{ textAlign: "center" }}>

        <div style={{
          padding: "0px 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="500px"
            height="400px"
            captionStyle={captionStyle} 
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "500px",
              maxHeight: "400px",
              margin: "0px auto",
            }}
          />
        </div>
      </div>


    </>
  )
}

export default Caro