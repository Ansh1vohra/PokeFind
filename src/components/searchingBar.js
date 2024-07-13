import './components.css';
import { useState, useRef, useEffect } from 'react';

function SearchingBar({ searchText, setSearchText, suggestions }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionBoxRef = useRef(null);

  const updateSearchText = (e) => {
    let value = e.target.value;
    let pokemonName = value.toLowerCase();
    setSearchText(pokemonName);
    setShowSuggestions(true);
  };

  const updateTheSearchText = (suggestion) => {
    setSearchText(suggestion.toLowerCase());
    setShowSuggestions(false);
  };

  const handleClickOutside = (event) => {
    if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='d-flex align-items-center justify-content-evenly bgc'>
        <form className="d-flex flex-column align-items-center m-4 gap-3" role="search">
          <label>Enter the name of Pokemon:</label>
          <input
            className="form-control widthOfSearch bg-dark text-white"
            type="search"
            placeholder="Enter the name of Pokemon"
            aria-label="Search"
            value={searchText}
            onChange={updateSearchText}
            onFocus={() => setShowSuggestions(true)}
          />
          {suggestions.length > 0 && showSuggestions && (
            <div className="suggestions border border-white rounded" ref={suggestionBoxRef}>
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="border-bottom inputField p-2"
                  onClick={() => updateTheSearchText(suggestion)}
                >
                  <span>{suggestion}</span>
                </div>
              ))}
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default SearchingBar;
