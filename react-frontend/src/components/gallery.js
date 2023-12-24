import React, { useState } from 'react';

const PhotoPage = () => {
  const [photos, setPhotos] = useState([]);

  const handleUpload = (event) => {
    const newPhoto = event.target.files[0];
    setPhotos([...photos, newPhoto]);
  };

  const renderPhotos = () => {
    return photos.map((photo, index) => (
      <img key={index} src={URL.createObjectURL(photo)} alt={`Photo ${index + 1}`} />
    ));
  };

  const renderNavbar = () => {
    if (photos.length <= 3) {
      return null;
    }

    return (
      <div>
        <button onClick={() => console.log('Go to next page')}>Next Page</button>
      </div>
    );
  };

  return (
    <div>
      <div>
        <input type="file" accept="image/*" onChange={handleUpload} />
      </div>
      <div>
        {renderPhotos()}
      </div>
      {renderNavbar()}
    </div>
  );
};

export default PhotoPage;