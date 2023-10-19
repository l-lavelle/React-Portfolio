import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import './navBar.css'

// How to fade in element slowly time the loading in of page elements 
export default function NavBar() {
  const currentPage = useLocation().pathname;

  const [showComponent, setShowComponent] = useState(false)

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setShowComponent(!showComponent)
    //     }, 5000)
    // }, [])

    return (
        <>
        {showComponent ||
        <nav class="navbar navbar-expand-lg bg-body-tertiary fadeIn">
        <div class="container-fluid">
          <a class="navbar-brand">Lauren Lavelle</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
              <Link
                  to="/"
                  className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                  Home
              </Link>
              </li>
              <li class="nav-item">
              <Link
                  to="/Portfolio"
                  className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                  Portfolio
             </Link>
              </li>
              <li class="nav-item">
              <Link
                  to="/Contact"
                  className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Contact
             </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>}
      </>
    );
  }

