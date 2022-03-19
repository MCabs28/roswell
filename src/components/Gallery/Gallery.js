import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

import './Gallery.css'


function Gallery() {

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = [
    "images/h1.jpg",
    "images/master.jpg",
    "images/h3.jpg",
    "images/h4.jpg",
    "images/h5.jpg",
    "images/h6.jpg"
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

 

  return (
    <>

        <h1 className='gallery-title'><span className='hotel-text'>Roswell</span> Hotel Gallery</h1>
      
       <div className="gallery">
           
                    {images.map((src, index) => (
                    <img
                    src={src}
                    onClick={() => openImageViewer(index)}
                    width="300"
                    height="300"
                    key={index}
                    style={{ margin: "2px" }}
                    alt=""
                    />
                ))}

                {isViewerOpen && (
                    <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)",
                        marginTop: "50px",
                       
                    }}
                    
                    closeOnClickOutside={true}
                    />
                )}    
       </div>
        
    </>

    
  )
  
}

export default Gallery