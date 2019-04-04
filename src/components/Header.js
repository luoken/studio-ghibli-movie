import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Logo from '../assets/Studio_Ghibli_logo.png';

const Header = () => {
    return(
        <AppBar position="static" color="default" style={{marginBottom: '20px'}}>
            <img src={Logo} alt="Totoro Logo"/>
        </AppBar>
    )
}

export default Header;