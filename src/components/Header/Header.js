import React from 'react';
import { NavLink } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div id="branding">
                    <h1>
                        <span className="highlight">
                            Phone
                        </span>
                        <PhoneIcon fontSize="large" 
                            style={{
                                color: '#10da2bd3', 
                                transform: 'translate(0, 4px)'
                            }}
                        />
                            Phonics
                    </h1>
                    <h4>Free sounds for your phone</h4>
                </div>
                <nav>
                    <ul className="highlight">
                        <NavLink to="/" exact activeClassName="current"><li>Ringtones</li></NavLink>
                        <NavLink to="/text-alert-page" exact activeClassName="current"><li>Text Alerts</li></NavLink>
                        <NavLink to="/favorites-page"  exact activeClassName="current"><li>Favorites</li></NavLink>
                        <NavLink to="/about-page"  exact activeClassName="current"><li>About</li></NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
