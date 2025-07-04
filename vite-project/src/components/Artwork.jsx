import React from 'react';

function Artwork({ title, year, image }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <img src={image} alt={title} style={{ width: '200px' }} />
      <h4>{title} ({year})</h4>
    </div>
  );
}

export default Artwork;
