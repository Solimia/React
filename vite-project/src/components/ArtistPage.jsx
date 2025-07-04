import React from 'react';
import Artwork from './Artwork';

function ArtistPage({ name, bio, history, artworks }) {
  return (
    <div>
      <h2>{name}</h2>
      <p><strong>Біографія:</strong> {bio}</p>
      <p><strong>Історія:</strong> {history}</p>

      <h3>Роботи:</h3>
      {artworks.map((art, index) => (
        <Artwork
          key={index}
          title={art.title}
          year={art.year}
          image={art.image}
        />
      ))}
    </div>
  );
}

export default ArtistPage;
