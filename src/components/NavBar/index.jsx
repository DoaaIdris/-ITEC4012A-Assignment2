import "./styles.css";

import { TiHome } from 'react-icons/ti';
import { MdOutlineExplore } from 'react-icons/md';

export const Navbar = () => {
    return(
        <nav className="navbar">
            <ul classname="navbar-list">
                <li className="logo">
                    <a href="/">
                        <img alt="Instagram" className="logo-image" 
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
                    </a>  
                </li>
                <li className="search-bar">

                </li>
                <li className="navigation">
                    <div className = "icons">
                        <a href="/">
                        <svg aria-label="Home" className = "home-icon" role="img" viewBox="0 0 48 48" width="22">
                            <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 
                            2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 
                            1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
                        </a>
                        <a href="/explore">
                                <svg aria-label="Find people"  className = "explore-icon"
                                role="img" viewBox="0 0 48 48" ><path d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 
                                24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 
                                14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 
                                10.5-5-5 10.5z" ></path>
                                </svg>
                        </a>
                        <img className="profileImg" alt="dodotheburd's profile picture" crossorigin="anonymous" 
                                src="leaninggirl.jpg"></img>
                    </div>
                    
                </li>
                
            </ul>
        </nav>
    );
}