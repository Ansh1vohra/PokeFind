import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [pokemonNames, setPokemonNames] = useState([]);
  const [isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then(response => response.json())
      .then(data => {
        const names = data.results.map(pokemon => pokemon.name);
        setPokemonNames(names);
      })
      .catch(error => {
        console.error('Error fetching Pokémon names:', error);
      });
  }, []);

  let suggestions=[];
  if (searchText.length >= 1) {
    suggestions = pokemonNames
      .filter(name => name.toLowerCase().includes(searchText.toLowerCase()))
      .sort((a, b) => {
        // Compare the index of searchText in each name
        const indexA = a.toLowerCase().indexOf(searchText.toLowerCase());
        const indexB = b.toLowerCase().indexOf(searchText.toLowerCase());
        if (indexA < indexB) return -1;
        if (indexA > indexB) return 1;
        return a.localeCompare(b);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    const url = `https://pokeapi.co/api/v2/pokemon/${searchText}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.error('Error fetching Pokémon details:', error);
      });
  }, [searchText]);
  

  return (
    <div className='overBody'>
      <Footer />
      <div  className="mainBody">
        <Routes>
          <Route
            path="/"
            element={<Home
                searchText={searchText}
                setSearchText={setSearchText}
                searchResults={searchResults}
                suggestions={suggestions}
                isLoading = {isLoading}
              />}
          />
          <Route path="about/*" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;