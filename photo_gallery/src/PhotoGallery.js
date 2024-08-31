// src/PhotoGallery.js
import React from 'react';
import './PhotoGallery.css'; // We'll create this file for styling

const PhotoGallery = () => {
  return (
    <div className="gallery">
      <div className="photo">
        <img src="https://media.licdn.com/dms/image/D4D12AQFFWwkd6yzvHg/article-cover_image-shrink_600_2000/0/1701879757462?e=2147483647&v=beta&t=LFzEJ8NMqXGHrKKEs_xuXetmk3TU4KsG4de29udJV6s" alt="Gallery Image 1" />
      </div>
      <div className="photo">
        <img src="https://images.prismic.io/personalprotfolio/ZrBy7UaF0TcGIrK5_reactjs.jpg?auto=format,compress" alt="Gallery Image 2" />
      </div>
    </div>
  );
};

export default PhotoGallery;
