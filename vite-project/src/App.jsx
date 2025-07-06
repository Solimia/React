import React, { useState } from 'react';
import './App.css';
import ArtistPage from './components/ArtistPage';

const artists  = [
  {
    name: 'Вінсент ван Гог',
    bio: 'Голландський постімпресіоніст.',
    history: 'Ві́нсент Ві́ллем ван Гог (нід. Vincent Willem van Gogh; [ˈvɪnsɛnt vaŋˈɣɔx]; 30 березня 1853 — 29 липня 1890) — нідерландський художник-постімпресіоніст, який є однією з найвідоміших і найвпливовіших постатей в історії західного мистецтва. За трохи більше як десятиліття створив близько 2100 художніх робіт, у тому числі близько 860 олійних картин, більшість з яких датовані останніми двома роками його життя. Роботи включають пейзажі, натюрморти, портрети та автопортрети, і характеризуються сміливими кольорами, а також драматичним, імпульсивним та виразним малярством. Його творчий спадок мав величезний вплив насамперед на французький живопис. За життя ван Гог не зумів здобути комерційного успіху, і у 37 років, після років психічної хвороби, депресії та бідності вчинив самогубство. ',
    artworks: [
      {
        title: 'Зоряна ніч',
        year: 1889,
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
      },
      {
        title: 'Їдці картоплі',
        year: 1885,
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg',
      },
            {
        title: 'Церква в Овері',
        year: 1890,
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/L%27%C3%A9glise_d%27Auvers.jpg',
      },
    ],
  },
  {
    name: 'Клод Моне',
    bio: 'Французький імпресіоніст.',
    history: 'Клод Моне (1840-1926) - французький художник, один із засновників імпресіонізму. Він відомий своїми новаторськими роботами, які передають враження від навколишнього світу через гру світла та кольору. Моне народився в Парижі, але провів дитинство в Гаврі, де вперше почав малювати карикатури. Пізніше він став одним з ключових представників імпресіонізму, а його картини, такі як "Враження. Схід сонця", дали назву цілому художньому напрямку.',
    artworks: [
      {
        title: 'Схід сонця',
        year: 1872,
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg',
      },
      {
        title: 'Ставок з ліліями',
        year: 1899,
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Claude_Monet_Seerosen_um_1915_Neue_Pinakothek-4.jpg',
      },
            {
        title: 'Світанок',
        year: 1872,
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg',
      },
    ],
  },
  {
    name: 'Леонардо да Вінчі',
    bio: 'Італійський художник, вчений і винахідник.',
    history: 'Леонардо да Вінчі був видатним італійським художником, скульптором, архітектором, інженером, винахідником, анатомом, геологом, картографом, ботаніком та письменником епохи Відродження. Він народився 15 квітня 1452 року в містечку Вінчі, поблизу Флоренції, і помер 2 травня 1519 року у Франції. Леонардо да Вінчі вважається одним з найвидатніших геніїв в історії, "універсальною людиною" (лат. homo universalis)',
    artworks: [
      {
        title: 'Мона Ліза', /* 122 183*/
        year: 1503,
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      },
      {
        title: 'Хрещення Христа',
        year: 1478,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Verrocchio_e_leonardo%2C_battesimo_di_cristo_01.jpg', /* 122 183*/
      },
          {
        title: 'Мадонна в скелях',
        year: 1483,
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Leonardo_Da_Vinci_-_Vergine_delle_Rocce_%28Louvre%29.jpg', /* 122 183*/
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
      <select className='my-button' onChange={(e) => setSelectedArtistIndex(e.target.value)}>
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
