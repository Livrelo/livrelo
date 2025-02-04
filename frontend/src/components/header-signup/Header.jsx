import React from 'react';
import Box from '@mui/material/Box';
import livrelo from './LIVRELO.png';
import logo from './logo.png';
import { AppBar, Toolbar } from '@mui/material';
import "./styleHeader.css"

function Header(){
    return(
        <AppBar className='header'>
            <Toolbar className='header-bar'>
                <Box
                    component="img"
                    className="header-logo"
                    alt="Logo"
                    src={logo}
                    sx={{ height: 50 }}  
                />

                <Box
                    component="img"
                    className="header-livrelo"
                    alt="Livrelo"
                    src={livrelo}
                    sx={{ height: 25, marginRight: 'auto' }}  
                />
            </Toolbar>
        </AppBar>
    )
}

export default Header;