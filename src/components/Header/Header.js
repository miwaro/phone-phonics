import React from 'react';
import { NavLink } from "react-router-dom";
import PhoneIcon from '@material-ui/icons/Phone';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div id="branding">
                    <h1><span className="highlight">Phone</span><PhoneIcon />Phonics</h1>
                </div>
                <nav>
                    <ul className="highlight">
                        <NavLink to="/" exact activeClassName="current"><li>Ringtones</li></NavLink>
                        <NavLink to="/text-alert-page" exact activeClassName="current"><li>Text Alerts</li></NavLink>
                        <NavLink to="/request-page"  exact activeClassName="current"><li>Requests</li></NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
