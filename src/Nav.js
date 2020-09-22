import React, { useEffect, useState } from 'react'
import "./Nav.css"
import requests from './requests'
import netflix  from './netflix.svg'
import laughing from  './laughing.svg'
function Nav() {
    //states
    const [show, handleShow] = useState(false)
    const [movies] =useEffect([])
    //scroll listener
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    }, []);
    const SearchMovie = (movies) => {
        const keyword = movies.target.value;
        this.useState({search:keyword})
    }

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src={netflix} alt="Netflix Logo" />
            <input type="text" placeholder="Enter your movie" onChange={(movies) => this.SearchMovie(movies)} />
            {movies}
            <button>Search</button>
            <img className="nav_avatar" src={laughing} alt="Netflix Log"/>
        </div>
    )
}

export default Nav
