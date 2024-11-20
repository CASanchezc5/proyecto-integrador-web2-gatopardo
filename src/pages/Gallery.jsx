import React, { useState } from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    'public/Gallery_Pic01.jpg',
    'public/Gallery_Pic02.jpg',
    'public/Gallery_Pic03.jpg',
    'public/Gallery_Pic05.jpg',
    'public/Gallery_Pic06.jpg',
    'public/Gallery_Pic07.jpeg',
    'public/Gallery_Pic08.jpg',
    'public/Gallery_Pic10.jpg',
    'public/Gallery_Pic11.jpg',
    'public/Gallery_Pic12.jpg',
    'public/Gallery_Pic13.jpg',
    'public/Gallery_Pic14.jpg',
    'public/Gallery_Pic15.jpg',
    'public/Gallery_Pic16.jpg',
    'public/Gallery_Pic17.jpg',
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container gallery-container">
      <Menu />
      <h1 className="gallery-title">Galeria</h1>
      <div className="image-row">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`Imagen ${index + 1}`} 
            className="gallery-imagen" 
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content">
            <img 
              src={selectedImage} 
              alt="Imagen ampliada" 
              className="modal-image"
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Gallery;