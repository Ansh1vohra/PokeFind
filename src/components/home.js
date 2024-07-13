import SearchView from './searchView';
import SearchingBar from './searchingBar';
import Heading from './headingOfPage';

function Home({ searchText, searchResults, setSearchText, suggestions ,isLoading }){
  return(
    <div className='d-flex flex-column'>
      <Heading text="Welcome to PokeFind, Get to know about any Pokemon here" />
      <SearchingBar 
        searchText={searchText} 
        suggestions={suggestions} 
        setSearchText={setSearchText}
      />
      <SearchView 
        searchResults={searchResults} 
        searchText={searchText}
        isLoading = {isLoading}
      />
    </div>
  )
}

export default Home;