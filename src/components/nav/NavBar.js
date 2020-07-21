import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (


        <nav>
            <h3 id="logo">logo</h3>
            <ul>
                <Link to="/" ><li className="home"><button><b>Home</b></button></li></Link>
                <Link to="/blog"> <li className="blog"><button><b>Blog</b></button></li></Link>
                <Link to="/contactus"><li className="contact"><button>Contact</button></li></Link>
            </ul>
        </nav>


    )
}