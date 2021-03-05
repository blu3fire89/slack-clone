import React from 'react';
import { Avatar } from '@material-ui/core';
import '../styles/Header.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <Avatar className="header-avatar" alt="Arthuria Pendragon"/>
                <AccessTimeIcon />
            </div>
                
            <div className="header-search">
                <SearchIcon />
                <input placeholder="Seach slach clone" />
            </div>
            <div className="header-right">
                <HelpOutlineIcon />
            </div>
                
        </div>
    )
}

export default Header
