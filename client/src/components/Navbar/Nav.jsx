import logo from '../../assets/aroidp.png';
import './Nav.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <div className='flex justify-between items-center px-20 py-6 main-nav-cont'>
        <div className='left flex items-center gap-10'>
            <a href='#'><img className='image' src={logo} alt='Logo'/></a>
            <ul className='flex gap-10 opacity-90 text-sm'>
                <li><NavLink to='/' className="nav-link">Home</NavLink></li>
                <li><NavLink to='/shop' className="nav-link">Shop</NavLink></li>
                <li><NavLink to='/about' className="nav-link">About us</NavLink></li>
                <li><NavLink to='/contact' className="nav-link">Contact us</NavLink></li>
            </ul>
        </div>
        <div className='right text-xl flex gap-6 opacity-80'>
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faCartShopping} className='icon' />
        </div>
    </div>
  )
}

export default Nav;
