import React from "react";
import Proptypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar-${props.mode} navbar-expand-lg bg-${props.mode} `}>
      <div className="container-fluid d-flex ">
        <a className={`navbar-brand } my-3`} href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent d-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active mx-3" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success color-primary" type="submit">Search</button>
                  </form> */}

             <div className={`form-check form-switch d-flex text-${props.mode === 'light' ?'#213363':'light'}`}>
               <input onClick ={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label `}htmlFor="flexSwitchCheckDefault">{props.mode==="#213363"?"Enbale LightMode":"Enable DarkMode"}</label>
             </div>
       
        </div>
    
      </div>
    </nav>
  );
}

// Props: properties and components
Navbar.propTypes = {
  title: Proptypes.string.isRequired,
  aboutText: Proptypes.string.isRequired,
};

// Default value
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "this is TextUtils",
};
