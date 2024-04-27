import { Link } from 'react-router-dom';
import './components.css';
import Logo from './Image/pokeLogo.png';

function Footer(){
    return(
        <nav class="navbar bgc p-3 d-flex gap-4 ">
            <div>
                <Link class="navbar-brand" to="/"><img src={Logo} width="40px" alt="Logo" /></Link>
            </div>
            <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item p-1">
                    <Link class="nav-link text-white" to="/about">About Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Footer;