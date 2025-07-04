import React, { useState } from 'react';
import './App.css';
import ArtistPage from './components/ArtistPage';

const artists  = [
  {
    name: 'Вінсент ван Гог',
    bio: 'Голландський постімпресіоніст.',
    history: 'Народився в 1853, мав складну долю та яскраве мистецтво.',
    artworks: [
      {
        title: 'Зоряна ніч',
        year: 1889,
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
      },
      {
        title: 'Їдці картоплі',
        year: 1885,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Vincent_van_Gogh_-_The_Potato_Eaters_-_Google_Art_Project.jpg',
      },
    ],
  },
  {
    name: 'Клод Моне',
    bio: 'Французький імпресіоніст.',
    history: 'Один із засновників імпресіонізму, народився 1840.',
    artworks: [
      {
        title: 'Схід сонця',
        year: 1872,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Claude_Monet%2C_Impression%2C_soleil_levant.jpg',
      },
      {
        title: 'Ставок з ліліями',
        year: 1899,
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Claude_Monet_Water_Lilies_1916.jpg',
      },
      
    ],
  },
  {
    name: 'Леонардо да Вінчі',
    bio: 'Італійський художник, вчений і винахідник.',
    history: 'Народився в 1452 році, відомий своїми роботами в живопису, скульптурі та архітектурі.',
    artworks: [
      {
        title: 'Мона Ліза',
        year: 1503,
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      },
      {
        title: '(або "Джоконда")',
        year: 1503,
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      },
      
    ],
  },
];

function App() {
  const [selectedArtistIndex, setSelectedArtistIndex] = useState(0);
  const selectedArtist = artists[selectedArtistIndex];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Обери художника:</h1>
      <select onChange={(e) => setSelectedArtistIndex(e.target.value)}>
        {artists.map((artist, index) => (
          <option key={index} value={index}>
            {artist.name}
          </option>
        ))}
      </select>

      <hr />

      <ArtistPage
        name={selectedArtist.name}
        bio={selectedArtist.bio}
        history={selectedArtist.history}
        artworks={selectedArtist.artworks}
      />
    </div>
  );
}

export default App;
