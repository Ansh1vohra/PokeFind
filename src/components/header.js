import './components.css';
import { Link } from 'react-router-dom';

const Header = ( { searchText, setSearchText } ) => {
  /*
  const updateSearchText = (e) =>{
    setSearchText(e.target.value);
  }*/

  return (
    <nav class="navbar navbar-expand-lg new_style d-flex justify-content-around">
      <div className="container-fluid p-3">
        <Link class="navbar-brand" to="/"><img src='https://i0.wp.com/www.titanui.com/wp-content/uploads/2016/07/17/Pok%C3%A9mon-GO-Vector-Logo.png' width="80px" /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/about">About Us</Link>
            </li>
          </ul>{/* 
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            value={ searchText } onChange={updateSearchText}
            />
            <Link to="/">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </Link>
          </form>*/}
        </div>
    </nav>
  )
}

export default Header;