// import { Link } from 'react-router-dom';
import './components.css';

function SearchingBar({ searchText, setSearchText,suggestions}){
    const updateSearchText = (e) => {
        let value=e.target.value;
        let pokemonName = value.toLowerCase();
        setSearchText(pokemonName);
    }
    const updateTheSearchText = (suggestion) => {
        setSearchText(suggestion.toLowerCase());
    }

    console.log(suggestions);
    return(
      <>
        <div className='d-flex align-items-center justify-content-evenly bgc'>
            <form className="d-flex flex-column align-items-center m-4" role="search">
            <input 
              className="form-control widthOfSearch bg-dark text-white" 
              type="search" 
              placeholder="Enter the name of Pokemon" 
              aria-label="Search"
              value={ searchText } 
              onChange={updateSearchText} 
            />
            {suggestions.length > 0 && (
                <div className="suggestions border border-white rounded">
                    {suggestions.map((suggestion) => (
                      <div 
                        className="border-bottom inputField p-2" 
                        onClick={() => updateTheSearchText(suggestion)
                      }>
                        <span>{suggestion}</span>
                      </div>
                    ))}
                </div>
            )}
            </form>
        </div>
      </>
    )
  }

export default SearchingBar;