import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
    return (
        <div className="nav-container">
            <Link to="/">Sleep Tracker</Link>
            <MenuIcon />
        </div>
    )
}

export default Nav
