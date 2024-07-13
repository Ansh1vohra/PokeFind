import { useState, useEffect } from 'react';
import Heading from './headingOfPage';
import './components.css';

function SearchView({ searchResults, searchText, isLoading }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [searchResults]);

  let title;
  let pokeid = 0;

  if (isLoading) {
    title = `Loading...`;
  } else {
    if (searchText) {
      if (searchResults.id) {
        pokeid = searchResults.id.toString().padStart(3, '0');
        title = `Details of ${searchText}`;
      } else {
        title = `No Details found for your search`;
      }
    }
  }

  const imgURL = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokeid}.png`;

  return (
    <>
      <Heading text={title} />
      <div className='container-fluid p-4 d-flex flex-column flex-md-row align-items-center justify-content-evenly bgc text-white min-height'>
        <div>
          {searchResults.name && <h4>Name: {searchResults.name}</h4>}
          {searchResults.height && <h4>Height: {searchResults.height}</h4>}
          {searchResults.weight && <h4>Weight: {searchResults.weight}</h4>}
          {searchResults.id && <h4>ID: {searchResults.id}</h4>}
          {searchResults.types && (
            <h4>Type: {searchResults.types.map(type => type.type.name).join(', ')}</h4>
          )}
        </div>
        {pokeid !== 0 && (
          <div>
            {!imageLoaded && 
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }
            <img
              src={imgURL}
              className={`imgWidth ${!imageLoaded ? 'visually-hidden' : ''}`}
              alt="pokemon"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default SearchView;
