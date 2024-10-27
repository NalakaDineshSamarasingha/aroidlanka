import React, { useState } from "react";
import logo from "../../assets/aroidp.png";
import Nav_Image from "../../assets/nare.png";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faXmark,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";


function Nav() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleSearch = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div>
      {/* Main Navbar for larger screens */}
      <div className="flex justify-between items-center px-10 py-6 main-nav-cont">
        <div className="left flex items-center gap-10">
          <a href="/">
            <img className="image" src={logo} alt="Logo" />
          </a>
          <ul className="flex gap-10 opacity-90 text-sm tracking-widest ">
            <li onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavLink to="/" className="nav-link uppercase">Home</NavLink>
            </li>
            <li className="relative" onMouseEnter={() => setIsMegaMenuOpen(true)}>
              <NavLink to="/shop" className="nav-link uppercase">Shop</NavLink>
              {isMegaMenuOpen && (
                <div className="mega-menu">
                  <div className="left">
                    <div className="mega-menu-column">
                      <h4 className="font-semibold mb-4 uppercase sub">Category</h4>
                      <ul className="flex flex-col gap-2">
                        <li><NavLink to="/shop/all-plants" className="dropdown-link">All Plants</NavLink></li>
                        <li><NavLink to="/shop/aglaonema" className="dropdown-link">Aglaonema</NavLink></li>
                        <li><NavLink to="/shop/alocasia" className="dropdown-link">Alocasia</NavLink></li>
                        <li><NavLink to="/shop/anthurium" className="dropdown-link">Anthurium</NavLink></li>
                        <li><NavLink to="/shop/calthea" className="dropdown-link">Calathea</NavLink></li>
                        <li><NavLink to="/shop/monstera" className="dropdown-link">Monstera</NavLink></li>
                      </ul>
                    </div>
                    <div className="mega-menu-column">
                      <h4 className="font-semibold mb-4 uppercase sub">Variegated</h4>
                      <ul className="flex flex-col gap-2">
                        <li><NavLink to="/shop/variegated/all" className="dropdown-link">All Variegated</NavLink></li>
                        <li><NavLink to="/shop/variegated/albo" className="dropdown-link">Albo Variegated</NavLink></li>
                        <li><NavLink to="/shop/variegated/aurea" className="dropdown-link">Aurea Variegated</NavLink></li>
                        <li><NavLink to="/shop/variegated/marble" className="dropdown-link">Marble Variegated</NavLink></li>
                        <li><NavLink to="/shop/variegated/mint" className="dropdown-link">Mint Variegated</NavLink></li>
                      </ul>
                    </div>
                    <div className="mega-menu-column">
                      <h4 className="font-semibold mb-4 uppercase sub">Merchandise</h4>
                      <ul className="flex flex-col gap-2">
                        <li><NavLink to="/shop/merchandise/leaf-skeleton" className="dropdown-link">Leaf Skeleton</NavLink></li>
                        <li><NavLink to="/shop/merchandise/t-shirt" className="dropdown-link">T-shirt</NavLink></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mega-menu-column flex flex-col justify-center items-center gap-2">
                    <img src={Nav_Image} alt="nav" className="nav_image" />
                    <p className="desc">Grab it now!</p>
                  </div>
                </div>
              )}
            </li>
            <li onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavLink to="/reviews" className="nav-link uppercase">Reviews</NavLink>
            </li>
            <li onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavLink to="/policy" className="nav-link uppercase">Policy</NavLink>
            </li>
            <li onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavLink to="/about" className="nav-link uppercase">About us</NavLink>
            </li>
            <li onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavLink to="/contact" className="nav-link uppercase">Contact us</NavLink>
            </li>
          </ul>
        </div>

        <div className="right text-xl flex gap-6 opacity-80">
           
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={toggleSearch} />

          <FontAwesomeIcon icon={faCartShopping} className="icon" />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      <hr></hr>

      {/* Mobile Navbar */}
      <div className="opac">
        <div className="flex justify-between items-center px-4 py-6 mobo-nav-cont">
          <div className="left flex items-center gap-10">
            <a href="/">
              <img className="image" src={logo} alt="Logo" />
            </a>
          </div>

          {/* Mobile Icons */}
          <div className="mobo-right text-xl flex gap-6 opacity-80">
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={toggleSearch} />
            <FontAwesomeIcon icon={faCartShopping} className="icon" />
            <FontAwesomeIcon
              icon={faBars}
              className="menu-icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        {/* Full Menu on Mobile */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobo-logo">
            <img src={logo} className="logo" alt="logo"/>
            <FontAwesomeIcon icon={faXmark} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}  size="2x" />
          </div>
          <ul className="flex flex-col gap-4 ">
            <li className="bor">
              <NavLink to="/" className="nav-link uppercase">Home</NavLink>
            </li>
            <li className="flex justify-between items-center bor">
              <NavLink to="/shop" className="nav-link uppercase">Shop</NavLink>
              <FontAwesomeIcon icon={faPlus}  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}/>
            </li>
            {isMegaMenuOpen ? 
              <ul>
                <li>one</li>
                <li>two</li>
              </ul>
            :""}
            <li className="bor">
              <NavLink to="/reviews" className="nav-link uppercase">Reviews</NavLink>
            </li>
            <li className="bor">
              <NavLink to="/policy" className="nav-link uppercase">Policy</NavLink>
            </li>
            <li className="bor">
              <NavLink to="/about" className="nav-link uppercase">About us</NavLink>
            </li>
            <li className="bor">
              <NavLink to="/contact" className="nav-link uppercase">Contact us</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={isInputVisible ? 'bg-tr' : ' bg-tr hidden'}>

        <div  className={isInputVisible ? 'search-bar input-field' : 'search-bar hidden'}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={isInputVisible ? 'search-input magni' : 'search-input hidden'}/>
          <input 
            type="text" 
            className={isInputVisible ? 'search-input input-field' : 'search-input hidden'}
            placeholder="Search"
          />
          <FontAwesomeIcon icon={faXmark}  onClick={toggleSearch} className={isInputVisible ? 'search-input' : 'search-input hidden'}/>
        </div>
      </div>
    </div>
  );
}

export default Nav;
